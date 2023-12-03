const bcrypt = require('bcrypt');

class HashUtils {
    constructor(){
        this.saltRounds = 10;
    }

    async generateHash(password){
     
        try{
            const salt = await bcrypt.genSalt(this.saltRounds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        }catch(error){
            console.log(error);
        }
    }

    async validateHash(hash, password){
        return await bcrypt.compare(password, hash);
    }
}

module.exports = new HashUtils();