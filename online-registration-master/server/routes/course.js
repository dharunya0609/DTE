const express=require('express')
const {createCourse,getAllCourse,enrollCourse,getEnrolledCourse} = require('../controllers/course.js')
const router = express.Router();

router.get('/',getAllCourse)
router.post('/',createCourse)
router.post('/enroll',enrollCourse)
router.get('/:id',getEnrolledCourse)

module.exports=router;