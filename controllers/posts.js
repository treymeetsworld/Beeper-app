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
function timeline(req,res){
  Post.find({},function(error,posts){
    res.render('posts/timeline',{
    posts,
    error,
    title: 'Timeline',
    user: req.user ? req.user : null 
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
    res.redirect('/posts')
  })
}

function show(req,res){
  Post.findById(req.params.id, function (err,post){
    res.render('posts/show',{
      post,
    })
  })
}                               
function update(req,res){
  Post.findByIdAndUpdate(req.params.id , req.body, function(error,post){
    res.redirect('/posts')
  })
  }

  function deletePost(req,res){
    Post.findByIdAndDelete(req.params.id, function(err,post){
      res.redirect('/posts')
    })
  }

function createReply(req,res){
  Post.findById(req.params.id, function(err,post){
    post.replies.push(req.body)
    post.save(function(err){
      res.redirect(`/posts/${post._id}`)
    })
  })
}

export{
  index,
  create,
  newPost as new,
  show,
  update,
  deletePost as delete,
  timeline,
  createReply,
}