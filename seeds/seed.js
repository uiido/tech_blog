const sequelize = require('../config/connection');
const userData = require('./user_seeds.json');
const User = require('../models/User');
const postData = require('./post_seeds.json');
const Post = require('../models/Post');
const commentData = require('./comment_seeds.json');
const Comment = require('../models/Comment');

const init = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

init();