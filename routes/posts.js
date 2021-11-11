import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { passUserToView } from '../middleware/middleware.js'
const router = Router()

router.get('/',passUserToView, postsCtrl.index)
router.get('/timeline',isLoggedIn,passUserToView, postsCtrl.timeline)
router.get('/new',isLoggedIn, postsCtrl.new)
router.post('/',isLoggedIn, postsCtrl.create)
router.get('/:id',isLoggedIn,passUserToView, postsCtrl.show)
router.put('/:id',isLoggedIn, postsCtrl.update)
router.delete('/:id',isLoggedIn, postsCtrl.delete)
router.post('/:id/replies',isLoggedIn, postsCtrl.createReply)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

export {
  router
}

