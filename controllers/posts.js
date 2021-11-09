import { Post } from '../models/posts.js'
import { Profile } from '../models/profile.js'
import { User } from '../models/user.js'

function index(req,res){
  Post.find({}, function(error,posts){
    res.render('posts/index',{   
      posts,
      error,
      title: 'All posts',
    })
  })
}
function newPost(req,res){
  res.render('posts/new')
}

function create(req,res){
  const post = new Post(req.body)
  post.save(function(err){
    if (err) return res.redirect('/posts')
    res.render('posts/index',{
      post: post,
    })
  })
}

export{
  index,
  create,
  newPost as new,
}