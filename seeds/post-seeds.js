const { Post } = require('../models');

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;