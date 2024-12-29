const userController = require('../controllers/user_controllers')
const express = require('express')
const router = express.Router()
const userAuth = require('../midlewares/user-auth')

router.get('/',userController.getAllStudent)
router.get('/:id',userController.getStudentById)
router.post('/',userController.addStudent)
router.delete('/:id', userAuth, userController.deleteStudent)
module.exports = router