require('dotenv').config({
    path: process.env.NODE_ENV === 'development' ? '.env.test' : '.env'
});

 console.log(process.env);
const app = require('./app');

app.listen(process.env.APP_PORT || 3004, () => console.log(`Servidor funcionando na porta ${process.env.APP_PORT}`));