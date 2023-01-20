const authorization = (req, res, next) => {
    // Log-in authorizations
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = authorization;