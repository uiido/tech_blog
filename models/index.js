// Requires
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Throughs
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Module exports
module.exports = { User, Post, Comment };