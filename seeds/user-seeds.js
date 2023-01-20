const { User } = require('../models/');

const userSeeds = () => bulkCreate(userData);

module.exports = userSeeds;