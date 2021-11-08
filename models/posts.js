import mongoose from 'mongoose'
const Schema = mongoose.Schema


const replySchema = new Schema({
  name: String,
  content: String,
},{
  timestamps: true
})

const postSchema = new mongoose.Schema({
  name: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
  content: String,
  replies: [replySchema]
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}