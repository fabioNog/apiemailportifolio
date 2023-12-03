const app = require('../../app');
const BeerStyleRouter = require('../routes/BeerStyleRouter');

module.exports = (app) => {
    app.use(BeerStyleRouter);
}