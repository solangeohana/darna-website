import asyncHandler from 'express-async-handler'
import Renting from '../models/rentingModel.js'
import { handleImages } from '../utils/images.js'

//@desc   Fetch all listings
//@route  GET /api/rentings
//@access Public
const getRentings = asyncHandler(async (req, res) => {
  const rentings = await Renting.find({})

  res.json(rentings)
})

//@desc   Fetch single listing
//@route  GET /api/rentings/:id
//@access Public
const getRentingById = asyncHandler(async (req, res) => {
  const renting = await Renting.findById(req.params.id)

  if (renting) {
    res.json(renting)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Delete a listing
// @route   DELETE /api/rentings/:id
// @access  Private/Admin
const deleteRenting = asyncHandler(async (req, res) => {
  const renting = await Renting.findById(req.params.id)

  if (renting) {
    await renting.remove()
    res.json({ message: 'Listing removed' })
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

// @desc    Create a listing
// @route   POST /api/rentings
// @access  Private/Admin
const createRenting = asyncHandler(async (req, res) => {
  const renting = new Renting({
    name: 'Name Sample',
    title_en: 'Title Sample English',
    title_de: 'Title Sample Deutsch',
    user: req.user._id,
    coverPhoto: '/images/unicorn.png',
    nbRooms: 0,
    sqm: 0,
    fittedKitchen: false,
    balcony: false,
    cellar: false,
    location: {
      address: 'Address Sample',
      city: 'Berlin',
      postalCode: 0,
      country: 'Germany',
    },
    available: true,
    description_en: 'Description English',
    description_de: 'Description Deutsch',
    images: [],
    feature1_en: '',
    feature2_en: '',
    feature1_de: '',
    feature2_de: '',
  })

  const createdRenting = await renting.save()
  res.status(201).json(createdRenting)
})

// @desc    Update a listing
// @route   PUT /api/listings/:id
// @access  Private/Admin
const updateRenting = asyncHandler(async (req, res) => {
  const renting = await Renting.findById(req.params.id)

  if (!renting) {
    res.status(404).send({
      error: `Listing not found: ${req.params.id}`,
    })
    return
  }

  // TODO: use Joi for validation
  // const { error, value } = schema.validate(req.body);

  // const updated = mergeWith(renting.toObject(), value)
  //
  //
  // handle images...
  //
  // renting.overwrite(updated);
  // if(renting.validate()) renting.save();

  const {
    name,
    title_en,
    title_de,
    coverPhoto,
    nbRooms,
    sqm,
    fittedKitchen,
    balcony,
    cellar,
    available,
    description_en,
    description_de,
    feature1_en,
    feature2_en,
    feature1_de,
    feature2_de,
  } = req.body

  renting.name = name
  renting.title_en = title_en
  renting.title_de = title_de
  renting.nbRooms = nbRooms
  renting.sqm = sqm
  renting.fittedKitchen = fittedKitchen
  renting.balcony = balcony
  renting.cellar = cellar
  renting.location = {
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
  }
  renting.available = available
  renting.description_en = description_en
  renting.description_de = description_de
  renting.feature1_en = feature1_en
  renting.feature2_en = feature2_en
  renting.feature1_de = feature1_de
  renting.feature2_de = feature2_de

  /// Managing cover photo
  // FIXME: validate coverPhoto exists in uploads folder
  renting.coverPhoto = coverPhoto

  // Managing Images:

  // laypersons' input validation, later handled by Joi:
  if (!Array.isArray(req.body.images)) {
    return res.status(400).send({
      error: 'images is not an array',
    })
  }

  const images = handleImages(req.body.images, renting.images)

  if (images.error) {
    return res.status(400).send({
      error: images.error,
    })
  }

  if (images.changed) {
    renting.images = images.urls
  }

  const updatedRenting = await renting.save()
  res.json(updatedRenting)
})

export {
  getRentings,
  getRentingById,
  deleteRenting,
  createRenting,
  updateRenting,
}
