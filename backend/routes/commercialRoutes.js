import express from 'express'
const router = express.Router()
import {
  getCommercials,
  getCommercialById,
  deleteCommercial,
  createCommercial,
  updateCommercial,
} from '../controllers/commercialController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCommercials).post(protect, admin, createCommercial)

router
  .route('/:id')
  .get(getCommercialById)
  .delete(protect, admin, deleteCommercial)
  .put(protect, admin, updateCommercial)

export default router

