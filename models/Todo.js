// const mongoose = require('mongoose')
import mongoose  from "mongoose"

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

// is this right????
export default mongoose.model('Todo', TodoSchema)
