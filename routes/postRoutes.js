const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getOnePost);
router.post('/posts', postController.addOnePost);
router.put('/posts/:id', postController.updateOnePost);
router.delete('/posts/:id', postController.deleteOnePost);

module.exports = router;
