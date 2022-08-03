const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
    const users = await User
        .find({})
        // .populate('notes', { content: 1, date: 1 })

    response.json(users)
})

// Create new user
userRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body

    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return response.status(400).json({
            error: 'username must be unique'
        })
    }
    if (username.length < 3) {
        return response.status(400).json({
            error: 'username is less than 3 characters'
        })
    }
    if (password.length < 3) {
        return response.status(400).json({
            error: 'password is less than 3 characters'
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser)
})

module.exports = userRouter