const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS DASHBOARD
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        res.render('dashboard', { loggedIn: req.session.loggedIn });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;