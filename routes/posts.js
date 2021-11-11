import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

router.get('/', postsCtrl.index)
router.get('/timeline', postsCtrl.timeline)
router.get('/new', postsCtrl.new)
router.post('/', postsCtrl.create)
router.get('/:id', postsCtrl.show)
router.put('/:id', postsCtrl.update)
router.delete('/:id', postsCtrl.delete)
router.post('/:id/replies', postsCtrl.createReply)


export {
  router
}