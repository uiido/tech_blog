const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes.js');
const { route } = require('./user-routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('comment', commentRoutes);

module.exports = router;
