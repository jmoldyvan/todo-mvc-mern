// const express = require('express')
import express  from "express"

const router = express.Router()

// const authController = require('../controllers/auth')
import authController  from "../controllers/auth.js"

// const homeController = require('../controllers/home')
import homeController  from "../controllers/home.js"

// const { ensureAuth, ensureGuest } = require('../middleware/auth')
// import ensureAuth  from "../middleware/auth.js"
import  ensureAuth   from "../middleware/auth.js"


router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

export default router