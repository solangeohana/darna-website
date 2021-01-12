import path from 'path'
import express from 'express'
import multer from 'multer'
import Renting from '../models/rentingModel.js'
import { UPLOADS_DIRECTORY } from '../config/constants.js'

import { protect, admin } from '../middleware/authMiddleware.js'

function getPublicPath(filepath) {
  const filename = path.basename(filepath)
  return `/uploads/${filename}`
}

const router = express.Router()

router.use(protect, admin)

const storage = multer.diskStorage({
  destination: UPLOADS_DIRECTORY,
  filename(req, file, cb) {
    cb(
      null,
      // TODO: change data.now() to either cryptiles or uuid, as when uploading
      // multiple files this funcion could potentially be called multiple
      // times in the same millisecond.
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  )
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only !')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/coverPhoto', upload.single('coverPhoto'), (req, res) => {
  try {
    const coverPhoto = req.file
    // make sure file is available
    if (!coverPhoto) {
      res.status(400).send({
        error: 'No file is selected.',
      })
      return
    }

    const imagePath = getPublicPath(req.file.path)

    res.status(200).send({ uri: imagePath })
  } catch (err) {
    res.status(500).send({error: err })
  }
})

router.post('/images', upload.array('images', 20), async (req, res) => {
  const { files, body } = req

  // Check there were images:
  if (files.length === 0) {
    res.status(400).send({
      error: 'No images is selected.',
    })

    return
  }

  if (!body.rentingId) {
    res.status(400).send({
      error: 'Missing rentingId.',
    })

    return
  }

  try {
    const listing = await Renting.findById(body.rentingId)

    if (!listing) {
      res.status(404).send({
        error: `Could not find rent listing by ID ${body.rentingId}`,
      })

      return
    }

    // defensive coding for mongodb not having migrations of data:
    if (!listing.images) {
      listing.images = []
    }

    const newImages = files.map((file) => {
      const imagePath = getPublicPath(file.path)
      listing.images.push(imagePath)

      return imagePath
    })

    await listing.save()

    res.status(200).send({ images: newImages })
  } catch (err) {
    res.status(500).send({ error: err })
  }
})

export default router
