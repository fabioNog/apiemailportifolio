const { json } = require('sequelize');
const EmailStyleModel = require('../models/EmailStyleModel');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config(); // Carregue as variáveis de ambiente


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'fabio.nogueira.carmo@gmail.com',
      pass: process.env.PASS_WORD, // Use a variável de ambiente
    },
});


const imageUrl = 'https://fabionog.github.io/fabionogueira/static/media/fabionogueira-pc.1806dcda3d1feef28a3b.jpeg';

class SendEmailController {
    async send(req, res) {
        try {
            const { email, message, text,firstName,lastName,phone } = req.body;
            console.log(email)
            // Configurar o e-mail
            const mailClient = {
                from: 'fabio.nogueira.carmo@gmail.com',
                to: email,
                subject: "Contato do Fabio",
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <link rel="stylesheet" href="https://fabionog.github.io/fabionogueira">
                </head>
                <body>
                <div class="container">
                    <div class="card mt-4">
                        <div class="card-body">
                            <h1 class="card-title">Olá, seja muito bem-vindo</h1>
                            <div class="border rounded overflow-hidden mt-3">
                                <img src="${imageUrl}" alt="Desenvolvimento Web" class="card-img-top rounded" style="width: 50%;">
                                <div class="card-body">
                                    <p class="card-text">Estamos animados com o desenvolvimento web!</p>
                                    <p class="card-text">Responderemos o mais breve possível. Ficamos felizes em ter sido lembrados!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                </body>
                </html>
              `,
            };

            const mailMe = {
                from: email,
                to: 'fabio.nogueira.carmo@gmail.com',
                subject: "Contato do Portifolio",
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <link rel="stylesheet" href="https://fabionog.github.io/fabionogueira">
                </head>
                <body>
                <div class="container">
                    <div class="card mt-4">
                        <div class="card-body">
                            <h1 class="card-title">Olá, seja muito bem-vindo</h1>
                            <div class="border rounded overflow-hidden mt-3">
                               
                                <div class="card-body">
                                    <p class="card-text">Nome: ${firstName} ${lastName}</p>
                                    <p class="card-text">Telefone:  ${phone}</p>
                                    <p class="card-text">Mensagem: ${message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                </body>
                </html>
              `,
            };

            await transporter.sendMail(mailClient);
            await transporter.sendMail(mailMe);

            res.json({
                msg: 'Email enviado com sucesso!',
                code: 200
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
        }
    }
}

module.exports = new SendEmailController();
