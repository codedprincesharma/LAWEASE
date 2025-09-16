import mongoose from 'mongoose'
const userSchemas = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true,
  }
}, { timestamps: true })


const user = mongoose.model('user', userSchemas)

export default user