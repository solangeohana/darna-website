import path from 'path'
import express from 'express'
import multer from 'multer'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import { v4 as uuidv4 } from 'uuid'

import Renting from '../models/rentingModel.js'
import Buying from '../models/buyingModel.js'
import Commercial from '../models/commercialModel.js'

import { protect, admin } from '../middleware/authMiddleware.js'
import env from '../config/env.js'

const router = express.Router()

router.use(protect, admin)

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

// for local storage:
// const storage = multer.diskStorage({
//   destination: UPLOADS_DIRECTORY,
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${file.originalname}-${Date.now()}${path.extname(file.originalname)}`
//     )
//   },
// })

//s3

const spacesEndpoint = new aws.Endpoint(env.DO_SPACE)
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: env.DO_SPACE_KEY,
  secretAccessKey: env.DO_SPACE_SECRET,
})

const storage = multerS3({
  s3: s3,
  bucket: env.DO_SPACE_BUCKET,
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: function (request, file, cb) {
    cb(null, `${file.fieldname}/${uuidv4()}${path.extname(file.originalname)}`)
  },
})

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

    res.status(200).send({ uri: `${env.DO_SPACE_CDN}/${coverPhoto.key}` })
  } catch (err) {
    res.status(500).send({ error: err })
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

  if (!body.listingId) {
    res.status(400).send({
      error: 'Missing listingId.',
    })

    return
  }

  if (
    !body.listingType ||
    !['rent', 'buy', 'commercial'].includes(body.listingType)
  ) {
    res.status(400).send({
      error: 'Missing listingId.',
    })

    return
  }

  try {
    let Model
    if (body.listingType === 'rent') {
      Model = Renting
    } else if (body.listingType === 'buy') {
      Model = Buying
    } else {
      Model = Commercial
    }
    const listing = await Model.findById(body.listingId)

    if (!listing) {
      res.status(404).send({
        error: `Could not find rent listing by ID ${body.listingId}`,
      })

      return
    }

    // defensive coding for mongodb not having migrations of data:
    if (!listing.images) {
      listing.images = []
    }

    const newImages = files.map((file) => {
      listing.images.push(`${env.DO_SPACE_CDN}/${file.key}`)

      return file.location
    })

    await listing.save()

    res.status(200).send({ images: newImages })
  } catch (err) {
    res.status(500).send({ error: err })
  }
})

export default router
