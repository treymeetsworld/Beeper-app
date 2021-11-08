import { Post } from '../models/posts.js'

function index(req,res){
  Post.find({}, function(error,posts){
    res.render('posts/index',{
      posts,
      error,
      title: 'All posts',
    })
  })
}


export{
  index,
}