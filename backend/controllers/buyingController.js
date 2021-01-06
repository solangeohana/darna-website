import asyncHandler from 'express-async-handler'
import Buying from '../models/buyingModel.js'

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
    name: ' Name',
    title: 'Title',
    user: req.user._id,
    coverPhoto: '/images/unicorn.png',
    price: 0,
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

  const createdBuying = await buying.save()
  res.status(201).json(createdBuying)
})

// @desc    Update a listing
// @route   PUT /api/buyings/:id
// @access  Private/Admin
const updateBuying = asyncHandler(async (req, res) => {
  const {
    name,
    title,
    coverPhoto,
    price,
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

  const buying = await Buying.findById(req.params.id)

  if (buying) {
    buying.name = name
    buying.title = title
    buying.coverPhoto = coverPhoto
    buying.price = price
    buying.sqm = sqm
    buying.feature1 = feature1
    buying.feature2 = feature2
    buying.feature3 = feature3
    buying.feature4 = feature4
    buying.feature5 = feature5
    buying.feature6 = feature6
    buying.location = {
      address: req.body.address,
      city: req.body.city,
      postalCode: req.body.postalCode,
      country: req.body.country,
    }
    buying.available = available
    buying.description = description
    buying.images = images

    const updatedBuying = await buying.save()
    res.json(updatedBuying)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

export {
  getBuyings,
  getBuyingById,
  deleteBuying,
  createBuying,
  updateBuying,
}
