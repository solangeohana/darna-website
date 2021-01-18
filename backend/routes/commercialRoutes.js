import express from 'express'
import {
  getCommercials,
  getCommercialById,
  deleteCommercial,
  createCommercial,
  updateCommercial,
} from '../controllers/commercialController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// public routes:
router.get('/', getCommercials)
router.get('/:id', getCommercialById)

// protected routes:
router.use(protect, admin)
router.post('/', createCommercial)
router.delete('/:id', deleteCommercial)
router.put('/:id', updateCommercial)

export default router
