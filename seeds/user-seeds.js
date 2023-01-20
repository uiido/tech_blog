const { User } = require('../models/');

const userData = [
    {
        username: 'testuser',
        password: 'password123'
    }
];

const userSeeds = () => bulkCreate(userData);

module.exports = userSeeds;