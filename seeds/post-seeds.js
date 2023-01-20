const { Post } = require('../models');

const postData = [
    {
        title: 'This is a new post!',
        content: 'This is the content of a new post!',
        user_id: 1
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;