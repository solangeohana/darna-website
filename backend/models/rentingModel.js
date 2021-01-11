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
    title_en: {
      type: String,
      required: true,
    },
    title_de: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: false,
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
      country: { type: String, required: false }
    },
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
    description_en: {
      type: String,
      required: false
    },
    description_de: {
      type: String,
      required: false
    },
    feature1_en: {
      type: String,
      required: false,
    },
    feature1_de: {
      type: String,
      required: false,
    },
    feature2_en: {
      type: String,
      required: false,
    },
    feature2_de: {
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
