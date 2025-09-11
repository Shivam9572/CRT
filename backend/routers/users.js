const express=require('express');
const {getAllusers,getUserById,addNewUser}=require('../controllers/users');
const router=express.Router();

router.get("/",getAllusers);
router.get('/:userId',getUserById);
router.post('/',addNewUser);
module.exports=router;