import express from 'express'
import { login, signup } from '../controllers/auth.js'
import { getAllUsers, updateProfile ,updatePasswordByEmail} from '../controllers/users.js'
//import auth from '../models/auth.js'


const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id', updateProfile)
router.patch('/updatepassword', updatePasswordByEmail)


export default router