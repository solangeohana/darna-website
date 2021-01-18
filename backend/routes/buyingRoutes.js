import express from 'express'
import {
  getBuyings,
  getBuyingById,
  deleteBuying,
  createBuying,
  updateBuying,
} from '../controllers/buyingController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// public routes:
router.get('/', getBuyings)
router.get('/:id', getBuyingById)

// protected routes:
router.use(protect, admin)
router.post('/', createBuying)
router.delete('/:id', deleteBuying)
router.put('/:id', updateBuying)

export default router

