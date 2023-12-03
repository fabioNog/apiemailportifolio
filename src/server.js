require('dotenv').config({
    path: process.env.NODE_ENV === 'development' ? '.env.test' : '.env'
});

const app = require('./app');

app.listen(process.env.APP_PORT || 3001, () => console.log(`Servidor funcionando na porta ${process.env.APP_PORT}`));