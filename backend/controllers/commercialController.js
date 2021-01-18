import asyncHandler from 'express-async-handler'
import Commercial from '../models/commercialModel.js'
import path from 'path'
import fs from 'fs/promises'

//@desc   Fetch all listings
//@route  GET /api/commercials
//@access Public
const getCommercials = asyncHandler(async (req, res) => {
  const commercials = await Commercial.find({})

  res.json(commercials)
})

//@desc   Fetch single listing
//@route  GET /api/commercials/:id
//@access Public
const getCommercialById = asyncHandler(async (req, res) => {
  const commercial = await Commercial.findById(req.params.id)

  if (commercial) {
    res.json(commercial)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Delete a listing
// @route   DELETE /api/commercials/:id
// @access  Private/Admin
const deleteCommercial = asyncHandler(async (req, res) => {
  const commercial = await Commercial.findById(req.params.id)

  if (commercial) {
    await commercial.remove()
    res.json({ message: 'Listing removed' })
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Create a listing
// @route   POST /api/commercials
// @access  Private/Admin
const createCommercial = asyncHandler(async (req, res) => {
  const commercial = new Commercial({
    name: ' Name Sample',
    title_en: 'Title English',
    title_de: 'Title Deutsch',
    user: req.user._id,
    coverPhoto: '/images/unicorn.png',
    nbRooms: 0,
    sqm: 0,
    feature1_en: '',
    feature2_en: '',
    feature3_en: '',
    feature4_en: '',
    feature5_en: '',
    feature6_en: '',
    feature1_de: '',
    feature2_de: '',
    feature3_de: '',
    feature4_de: '',
    feature5_de: '',
    feature6_de: '',
    location: {
      address: 'Address',
      city: 'Berlin',
      postalCode: 0,
      country: 'Germany',
    },
    available: true,
    description_en: 'description english',
    description_de: 'description deutsch',
    images: [],
  })

  const createdCommercial = await commercial.save()
  res.status(201).json(createdCommercial)
})

// @desc    Update a listing
// @route   PUT /api/commercials/:id
// @access  Private/Admin
const updateCommercial = asyncHandler(async (req, res) => {
  const commercial = await Commercial.findById(req.params.id)

  if (!commercial) {
    res.status(404).send({
      error: `Listing not found: ${req.params.id}`,
    })
    return
  }

  const {
    name,
    title_en,
    title_de,
    coverPhoto,
    nbRooms,
    sqm,
    feature1_en,
    feature2_en,
    feature3_en,
    feature4_en,
    feature5_en,
    feature6_en,
    feature1_de,
    feature2_de,
    feature3_de,
    feature4_de,
    feature5_de,
    feature6_de,
    available,
    description_en,
    description_de,
  } = req.body

  commercial.name = name
  commercial.title_en = title_en
  commercial.title_de = title_de
  commercial.coverPhoto = coverPhoto
  commercial.nbRooms = nbRooms
  commercial.sqm = sqm
  commercial.feature1_en = feature1_en
  commercial.feature2_en = feature2_en
  commercial.feature3_en = feature3_en
  commercial.feature4_en = feature4_en
  commercial.feature5_en = feature5_en
  commercial.feature6_en = feature6_en
  commercial.feature1_de = feature1_de
  commercial.feature2_de = feature2_de
  commercial.feature3_de = feature3_de
  commercial.feature4_de = feature4_de
  commercial.feature5_de = feature5_de
  commercial.feature6_de = feature6_de
  commercial.location = {
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
  }
  commercial.available = available
  commercial.description_en = description_en
  commercial.description_de = description_de

  // Managing Images:
  if (!Array.isArray(req.body.images)) {
    return res.status(400).send({
      error: 'images is not an array',
    })
  }

  const newImages = req.body.images
  const images = []
  const imagesDiff = { added: [], removed: [] }
  const badImages = []

  // Check for images that have been removed:
  commercial.images.forEach((existingImage) => {
    if (newImages.includes(existingImage)) {
      images.push(existingImage)
    } else {
      imagesDiff.removed.push(existingImage)
    }
  })
  // Check for images added:
  newImages.forEach((newImage) => {
    // newImage = '../../something' => /something

    const file = path.resolve('/', newImage)
    // Validate the new image is in uploads:
    if (!file.startsWith('/uploads/')) {
      badImages.push(file)
      return
    }

    if (!commercial.images.includes(file)) {
      imagesDiff.added.push(file)
      images.push(file)
    }
  })
  console.log({ previous: commercial.images, ...imagesDiff, badImages, images })

  if (badImages.length > 0) {
    return res.status(400).send({
      error: `request contained image that wasn't in uploads: ${badImages.join(
        ', '
      )}`,
    })
  }
  if (imagesDiff.added.length > 0) {
    // FIXME: check added images exist in uploads directory with fs.exists
    // if image doesn't exist return res.status(400);
  }
  if (imagesDiff.removed.length > 0) {
    // clean up files
    try {
      await Promise.all(
        imagesDiff.removed.map((file) => {
          if (file.startsWith('/uploads/')) {
            return fs.rm(path.join(process.cwd(), file))
          } else {
            return Promise.resolve()
          }
        })
      )
    } catch (err) {
      console.error(err)
      res.status(400).send({
        error: 'unable to delete removed images',
      })
    }
  }
  if (imagesDiff.added.length > 0 || imagesDiff.removed.length > 0) {
    commercial.images = Array.from(new Set(images))
  }
  const updatedCommercial = await commercial.save()
  res.json(updatedCommercial)
})

export {
  getCommercials,
  getCommercialById,
  deleteCommercial,
  createCommercial,
  updateCommercial,
}
