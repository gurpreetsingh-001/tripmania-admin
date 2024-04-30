const adminModel = require('../models/adminModel');
const bcryptPassword = require('../utils/bcryptPassword')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const RegisterUser = async (req, res) => {
    // registration logic 
    try {
        const { password, username } = req.body;
        const hashedPassword = await bcryptPassword(password)
        console.log(hashedPassword);
        const insertedData = await adminModel.create({
            username,
            password: hashedPassword
           
           
        })
       console.log(insertedData);
      return res.status(200).json({
            message: "data inserted successfully",
            insertedData
        })


    } catch (error) {
        console.log(error.message ,"error msg");
        res.status(404).json({
            message: error.message
        })
    }

}

const LoginUser = async (req, res) => {
    
    const { username, password } = req.body;
    if (!username  || !password) {
        return res.status(201).json({
            message: "Please enter all your credentails"
        })
    }

    const ifUser = await adminModel.findOne({ username: username });

    if (!ifUser) {
        return res.status(202).json({
            message: `User with this ${username} is not found !Please register.`
        })
    }

    // if (ifUser.password == password) {
    //     return res.json({
    //         message: `User with ${email} has been logged in`
    //     })
    // }
    const ismatchedPassword = await bcrypt.compare(password, ifUser.password);
    if (ismatchedPassword) {
        const token = jwt.sign({
            data: ifUser._id
        }, process.env.JWT_SECRETKEY, { expiresIn: '100h' });
        return res.status(200).json({
            message: `User is loggedin`,
            token
        })
    }
    res.status(203).json({
        message: `User is not able to login due to wrong password`
    })
}

module.exports = {
    LoginUser,
    RegisterUser
};