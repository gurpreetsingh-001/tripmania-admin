const express = require('express');
const jwt = require('jsonwebtoken');
const { LoginUser,RegisterUser} = require('../controller/admin.controller')

const adminRoutes = express.Router();

// Signup

adminRoutes.post('/login',LoginUser);


module.exports = adminRoutes;
