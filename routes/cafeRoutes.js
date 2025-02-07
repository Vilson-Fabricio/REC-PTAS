import express from 'express'
const router = express.Router();
import {addCafe} from '../controllers/cafeControllers.js'
import {busCafe} from '../controllers/cafeControllers.js'
import {listCafe} from '../controllers/cafeControllers.js'
import {atuCafe} from '../controllers/cafeControllers.js'
import {delCafe} from '../controllers/cafeControllers.js'

router.post('/', addCafe)
router.get('/:id', busCafe)
router.get('/', listCafe)
router.put('/:id', atuCafe)
router.delete('/:id', delCafe)

export{router}