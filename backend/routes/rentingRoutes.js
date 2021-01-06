import express from 'express'
const router = express.Router()
import {
  getRentings,
  getRentingById,
  deleteRenting,
  createRenting,
  updateRenting,
} from '../controllers/rentingController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getRentings).post(protect, admin, createRenting)

router
  .route('/:id')
  .get(getRentingById)
  .delete(protect, admin, deleteRenting)
  .put(protect, admin, updateRenting)

export default router
