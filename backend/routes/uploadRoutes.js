import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
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
        status: false,
        data: 'No file is selected.',
      })
    } else {
      console.log(req.file.path)
      res.send(`/${req.file.path}`)
      
    }
  } catch (err) {
    res.status(500).send(err)
  }
})


// router.post('/images', upload.array('images', 20), async (req, res) => {
//   try {
//     const images = req.files
//     console.log(req.files)
//     // check if photos are available
//     if (!images) {
//       res.status(400).send({
//         status: false,
//         data: 'No images is selected.',
//       })
//     } else {
//       // iterate over all photos
//       let data = []
//       for(let i = 0; i < images.length; i++){
//         data.push(`/${images[i].path}`)
//       }
//       res.send(data)
//     }
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

router.post('/images', upload.single('images'), (req, res) => {
  try {
    const image = req.file
    // make sure file is available
    if (!image) {
      res.status(400).send({
        status: false,
        data: 'No file is selected.',
      })
    } else {
      console.log(req.file.path)
      res.send(`/${req.file.path}`)
      
    }
  } catch (err) {
    res.status(500).send(err)
  }
})





export default router
