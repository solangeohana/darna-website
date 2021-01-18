import asyncHandler from 'express-async-handler'
import Buying from '../models/buyingModel.js'
import path from 'path'
import fs from 'fs/promises'

//@desc   Fetch all listings
//@route  GET /api/buyings
//@access Public
const getBuyings = asyncHandler(async (req, res) => {
  const buyings = await Buying.find({})

  res.json(buyings)
})

//@desc   Fetch single listing
//@route  GET /api/buyings/:id
//@access Public
const getBuyingById = asyncHandler(async (req, res) => {
  const buying = await Buying.findById(req.params.id)

  if (buying) {
    res.json(buying)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Delete a listing
// @route   DELETE /api/buyings/:id
// @access  Private/Admin
const deleteBuying = asyncHandler(async (req, res) => {
  const buying = await Buying.findById(req.params.id)

  if (buying) {
    await buying.remove()
    res.json({ message: 'Listing removed' })
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Create a listing
// @route   POST /api/buyings
// @access  Private/Admin
const createBuying = asyncHandler(async (req, res) => {
  const buying = new Buying({
    name: ' Name Sample',
    title_en: 'Title English',
    title_de: 'Title Deutsch',
    user: req.user._id,
    coverPhoto: '/images/unicorn.png',
    price: 0,
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
      address: 'Address Sample',
      city: 'Berlin',
      postalCode: 0,
      country: 'Germany',
    },
    available: true,
    description_en: 'description english',
    description_de: 'description deutsch',
    images: [],
  })

  const createdBuying = await buying.save()
  res.status(201).json(createdBuying)
})

// @desc    Update a listing
// @route   PUT /api/buyings/:id
// @access  Private/Admin
const updateBuying = asyncHandler(async (req, res) => {
  const buying = await Buying.findById(req.params.id)

  if (!buying) {
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
    price,
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

    buying.name = name
    buying.title_en = title_en
    buying.title_de = title_de
    buying.coverPhoto = coverPhoto
    buying.price = price
    buying.sqm = sqm
    buying.feature1_en = feature1_en
    buying.feature2_en= feature2_en
    buying.feature3_en = feature3_en
    buying.feature4_en = feature4_en
    buying.feature5_en = feature5_en
    buying.feature6_en = feature6_en
    buying.feature1_de = feature1_de
    buying.feature2_de = feature2_de
    buying.feature3_de = feature3_de
    buying.feature4_de = feature4_de
    buying.feature5_de = feature5_de
    buying.feature6_de = feature6_de
    buying.location = {
      address: req.body.address,
      city: req.body.city,
      postalCode: req.body.postalCode,
      country: req.body.country,
    }
    buying.available = available
    buying.description_en = description_en
    buying.description_de = description_de

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
  buying.images.forEach((existingImage) => {
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

    if (!buying.images.includes(file)) {
      imagesDiff.added.push(file)
      images.push(file)
    }
  })
  console.log({ previous: buying.images, ...imagesDiff, badImages, images })

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
    buying.images = Array.from(new Set(images))
  }

    const updatedBuying = await buying.save()
    res.json(updatedBuying)
})

export {
  getBuyings,
  getBuyingById,
  deleteBuying,
  createBuying,
  updateBuying,
}
