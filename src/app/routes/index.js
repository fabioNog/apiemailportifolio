const app = require('../../app');
const EmailRouter = require('../routes/EmailRouter');

module.exports = (app) => {
    app.use(EmailRouter);
}