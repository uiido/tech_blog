// Requires and router commands
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();
// If you are logged in, you can view the homepage and recent posts.
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        // Returns posts if logged in
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts, loggedIn: req.session.loggedIn });
        })
        // Returns error
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Login redirect
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Gets posts by id
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'title'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        // Returns posts if logged in
        // Returns error message if no id was found
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'Sorry, no posts with this ID were found!' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            console.log(post);
            res.render('single-post', { post, loggedIn: req.session.loggedIn });
        })
        // Returns error
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Returns comments on a post
router.get('/posts-comments', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'title'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        // Returns comments on posts
        // Returns error if no id found
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'Sorry, no posts with this ID were found!' });
                return;
            }
            const post = dbPostData.get({ plain: true });

            res.render('posts-comments', { post, loggedIn: req.session.loggedIn });
        })
        // Returns error
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Router
module.exports = router;