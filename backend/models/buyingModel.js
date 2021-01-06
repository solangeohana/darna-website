import mongoose from 'mongoose'

const buyingSchema = mongoose.Schema(
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
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    sqm: {
      type: Number,
      required: true,
      default: 0,
    },
    feature1: {
      type: String,
      required: false,
    },
    feature2: {
      type: String,
      required: false,
    },
    feature3: {
      type: String,
      required: false,
    },
    feature4: {
      type: String,
      required: false,
    },
    feature5: {
      type: String,
      required: false,
    },
    feature6: {
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
    description: {
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

const Buying = mongoose.model('Buying', buyingSchema)

export default Buying
