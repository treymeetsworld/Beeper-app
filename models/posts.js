import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  name: {type: Schema.Types.ObjectId, ref:'Profile'},
  content: String,
  replies: [{type: Schema.Types.ObjectId, ref:'Reply'}]
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}