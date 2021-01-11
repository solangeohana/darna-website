import mongoose from 'mongoose'

const commercialSchema = mongoose.Schema(
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
    feature1_en: {
      type: String,
      required: false,
    },
    feature2_en: {
      type: String,
      required: false,
    },
    feature3_en: {
      type: String,
      required: false,
    },
    feature4_en: {
      type: String,
      required: false,
    },
    feature5_en: {
      type: String,
      required: false,
    },
    feature6_en: {
      type: String,
      required: false,
    },
    feature1_de: {
      type: String,
      required: false,
    },
    feature2_de: {
      type: String,
      required: false,
    },
    feature3_de: {
      type: String,
      required: false,
    },
    feature4_de: {
      type: String,
      required: false,
    },
    feature5_de: {
      type: String,
      required: false,
    },
    feature6_de: {
      type: String,
      required: false,
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
    description_en: {
      type: String,
      required: true,
    },
    description_de: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Commercial = mongoose.model('Commercial', commercialSchema)

export default Commercial
