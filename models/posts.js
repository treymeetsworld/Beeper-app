import mongoose from 'mongoose'
const Schema = mongoose.Schema



const postSchema = new mongoose.Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
  content: String,
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
} 