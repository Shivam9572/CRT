const express=require('express');
const {getAllUsers,getUserById,addUser}=require('../controllers/users');
const router=express.Router();

router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.post('/',addUser);
module.exports=router;