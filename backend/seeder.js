import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import buying from './data/buying.js'
import renting from './data/renting.js'
import commercial from './data/commercial.js'

import User from './models/userModel.js'
import Renting from './models/rentingModel.js'
import Buying from './models/buyingModel.js'
import Commercial from './models/commercialModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try { 
        await Renting.deleteMany()
        await Buying.deleteMany()
        await Commercial.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleRentings = renting.map(r => {
            return { ...r, user: adminUser}
        })

        const sampleBuyings = buying.map(b => {
            return { ...b, user: adminUser}
        })

        const sampleCommercials = commercial.map(c => {
            return { ...c, user: adminUser}
        })

        await Renting.insertMany(sampleRentings)
        await Buying.insertMany(sampleBuyings)
        await Commercial.insertMany(sampleCommercials)


        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try { 
        await Renting.deleteMany()
        await Buying.deleteMany()
        await Commercial.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
}else {
    importData()
}
