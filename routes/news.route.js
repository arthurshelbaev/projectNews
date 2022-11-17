const { Router } = require('express')
const { newsController } = require('../controllers/news.controller')

const router = Router()

router.post('/news', newsController.addNews)
router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsById)
router.get('/news/categories/:id', newsController.getNewsByCat)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.updateNews)

module.exports = router 