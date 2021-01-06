import express from 'express'
const router = express.Router()
import {
  getBuyings,
  getBuyingById,
  deleteBuying,
  createBuying,
  updateBuying,
} from '../controllers/buyingController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getBuyings).post(protect, admin, createBuying)

router
  .route('/:id')
  .get(getBuyingById)
  .delete(protect, admin, deleteBuying)
  .put(protect, admin, updateBuying)

export default router

