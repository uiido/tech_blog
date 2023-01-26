const sequelize = require('../config/connection');
const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

module.exports = router;