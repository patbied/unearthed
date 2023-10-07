import express from 'express'
import giftController from '../controllers/gifts.js'



const router = express.Router()

router.get('/', giftController.getGifts)
router.post('/',giftController.createGift)
router.delete('/:id',giftController.deleteGift)
router.patch('/:id',giftController.updateGift)
router.get('/:giftId', giftController.getGiftById)


export default router