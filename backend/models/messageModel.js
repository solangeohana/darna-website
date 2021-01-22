import mongoose from 'mongoose'

const messageSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    message: {
     type: String,
     required: true
    },
    pronouns: {
        type: String,
        enum: ['He/him/his', 'She/her/her', 'They/them/their']
    },
    interest: {
        type: String,
        enum: ['Buy', 'Rent', 'Sell', 'Commercial']
    }
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model('Message', messageSchema)

export default Message
