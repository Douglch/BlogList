const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: 3
    },
    author: {
      type: String,
      required: true,
      minLnegth: 3
    },
    url: String,
    likes: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })

  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // converts id to string and removes the initial object id
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Blog', blogSchema)