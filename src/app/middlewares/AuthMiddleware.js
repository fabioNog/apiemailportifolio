const jwt = require('jsonwebtoken');

class AuthMiddleware {

    constructor(){

    }

    async validarSessao(req, res, next){
        next();
    }

    async validarToken(req, res, next){
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                msg: "Token não fornecido!"
            });
        }

        console.log(authHeader)

        const parts = authHeader.split(' ');

        if(!parts.length === 2){
            return res.status(401).json({
                msg: "Token mal formatado!"
            });
        }

        const [ scheme, token ] = parts;

        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).json({
                msg: "Token inválido!"
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                return res.status(401).json({
                    msg: "Token inválido!"
                });
            }

            req.user = {
                id: decoded.id,
                email: decoded.email,
                nome: decoded.nome,
                token: token
            }
            
            return next();
        });
        

    }

}


module.exports = new AuthMiddleware();