import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}