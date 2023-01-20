const userSeeds = require('./user-seeds.js');
const postSeeds = require('./post-seeds.js');

const sequelize = require('../config/connection.js');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    await userSeeds();
    await postSeeds();
};

seedDb();