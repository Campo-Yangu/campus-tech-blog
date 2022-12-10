const express=require('express');
const router=express.Router();
const {
    getUsers
}=require('../controllers/userController');

//get route
router.get('/',getUsers);


module.exports=router;