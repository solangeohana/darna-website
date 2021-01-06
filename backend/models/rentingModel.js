import mongoose from 'mongoose'

const rentingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: true,
    },
    nbRooms: {
      type: Number,
      required: true,
      default: 0,
    },
    sqm: {
      type: Number,
      required: true,
      default: 0,
    },
    fittedKitchen: {
      type: Boolean,
      required: true,
      default: false,
    },
    balcony: {
      type: Boolean,
      required: true,
      default: false,
    },
    cellar: {
      type: Boolean,
      required: true,
      default: false,
    },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      country: { type: String, required: true }
    },
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
    description: {
      type: String,
      required: true
    },
    feature1: {
      type: String,
      required: false,
    },
    feature2: {
      type: String,
      required: false,
    },
    images: [{ 
      type: String 
    }] 
  },
  {
    timestamps: true,
  }
)

const Renting = mongoose.model('Renting', rentingSchema)

export default Renting
