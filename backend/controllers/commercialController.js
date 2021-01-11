import asyncHandler from 'express-async-handler'
import Commercial from '../models/commercialModel.js'

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
    name: ' Name',
    title: 'Title',
    user: req.user._id,
    coverPhoto: '/images/unicorn.png',
    nbRooms: 0,
    sqm: 0,
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    location: {
      address: 'Address',
      city: 'Berlin',
      postalCode: 0,
      country: 'Germany',
    },
    available: true,
    description: 'description',
    images: [],
  })

  const createdCommercial = await commercial.save()
  res.status(201).json(createdCommercial)
})

// @desc    Update a listing
// @route   PUT /api/commercials/:id
// @access  Private/Admin
const updateCommercial = asyncHandler(async (req, res) => {
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
    images,
  } = req.body

  const commercial = await Commercial.findById(req.params.id)

  if (commercial) {
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
    commercial.images = images

    const updatedCommercial = await commercial.save()
    res.json(updatedCommercial)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

export {
  getCommercials,
  getCommercialById,
  deleteCommercial,
  createCommercial,
  updateCommercial,
}
