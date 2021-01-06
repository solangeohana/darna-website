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
    title,
    coverPhoto,
    nbRooms,
    sqm,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    available,
    description,
    images,
  } = req.body

  const commercial = await Commercial.findById(req.params.id)

  if (commercial) {
    commercial.name = name
    commercial.title = title
    commercial.coverPhoto = coverPhoto
    commercial.nbRooms = nbRooms
    commercial.sqm = sqm
    commercial.feature1 = feature1
    commercial.feature2 = feature2
    commercial.feature3 = feature3
    commercial.feature4 = feature4
    commercial.feature5 = feature5
    commercial.feature6 = feature6
    commercial.location = {
      address: req.body.address,
      city: req.body.city,
      postalCode: req.body.postalCode,
      country: req.body.country,
    }
    commercial.available = available
    commercial.description = description
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
