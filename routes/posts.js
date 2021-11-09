import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

router.get('/', postsCtrl.index)
router.get('/new', postsCtrl.new)
router.post('/', postsCtrl.create)
router.get('/:id', postsCtrl.show)
router.put('/:id', postsCtrl.update)
router.delete('/:id', postsCtrl.delete)


export {
  router
}