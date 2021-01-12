import express from 'express'
import {
  getRentings,
  getRentingById,
  deleteRenting,
  createRenting,
  updateRenting,
} from '../controllers/rentingController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// public routes:
router.get('/', getRentings)
router.get('/:id', getRentingById)

// protected routes:
router.use(protect, admin)
router.post('/', createRenting)
router.delete('/:id', deleteRenting)
router.put('/:id', updateRenting)

export default router
