const express = require('express');
const { upload } = require("../../helpers/imageUpload");
const userRoute = express.Router();
const { userVerifyToken } = require('../../helpers/verifyToken');
const {
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    updatePassword
} = require('../../controller/user/user.controller');

userRoute.post('/register-User',
upload.single("profileImage"),
registerUser);

userRoute.post('/login-User',loginUser);
userRoute.get('/get-All-User',userVerifyToken, getAllUser);
userRoute.get('/get-User',userVerifyToken, getUser);

userRoute.put('/update-User',
upload.single("profileImage"),
userVerifyToken, updateUser);

userRoute.delete('/delete-User',userVerifyToken, deleteUser);
userRoute.put('/update-Password',userVerifyToken, updatePassword);

module.exports = userRoute;