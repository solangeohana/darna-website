import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_PASSWORD,
  },
})

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.RECEIVER_EMAIL,
      subject: req.body.interest,
      html: `
      <h3>You have a new contact request.</h3>
      <h4>Contact Details:</h4>
      <p>
        First Name: ${req.body.firstName}
        <br>Last Name: ${req.body.lastName}
        <br>Pronouns: ${req.body.pronouns}
        <br>Email: ${req.body.email}
        <br>Phone Number: ${req.body.phoneNumber}
        </p>
      <h4>Message:</h4>
      <p> ${req.body.message}</p>`
    }
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong, try again later',
        })
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us, we will be back to you shortly',
        })
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Something went wrong, try again later',
    })
  }
})

export default router
