import express from "express"

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"
import { createBooking, getAllbooking, getbooking } from "../controllers/bookingController.js"
const router =express.Router()

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getbooking)
router.get('/',verifyAdmin,getAllbooking)

export default router