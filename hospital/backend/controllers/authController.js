const express = require('express');
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel.js");

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            res.status(200).json({
                success: true,
                message: "user already in the database",
                existingUser,
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // rest data
        const user = new userModel(req.body);
        await user.save();
        return res.status(201).json({
            success: true,
            message: "user created ",
            user,
        })
    }
    catch (err) {
        console.log(err);
        console.log("error --> ", err.message)
        res.status(500).json({
            failure: true,
            message: 'Error in --> register API',
            err
        })
    }
}

module.exports = registerController;