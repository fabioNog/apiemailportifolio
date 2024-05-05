const EmailStyleModel = require('../models/EmailStyleModel');

class EmailStyleController {

    async create(req, res){
        try{
            const emailStyleData = req.body;
            console.log(emailStyleData)

            const EmailExiste =  await EmailStyleModel.findAll({
                where: {
                    styleemail: emailStyleData.styleemail
                }
            });

            if(EmailExiste.length > 0){
                return res.json({
                    msg: 'Email já cadastrado na base de dados'
                });
            }

            const emailstyle = await EmailStyleModel.create(emailStyleData)

            res.json({
                msg: 'Email inserido com sucesso!',
                emailstyle: emailstyle
            });
        }catch(error){
            console.log(erro)
            res.json({
                msg: 'erro ao inserir a Email'
            });
        }
    }

    async read(req, res){
        try{
            const emailstyle = await EmailStyleModel.findAll();
            console.log(emailstyle);
            res.json({
                msg: 'Emails recuperados com sucesso!',
                emailstyle: emailstyle
            });
        }catch(error){
            console.log(error);
            res.json({
                msg: 'erro ao buscar a Email'
            });
        }
    }

   

}

module.exports = new EmailStyleController();