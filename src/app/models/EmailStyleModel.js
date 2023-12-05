const { Model, DataTypes } = require('sequelize');

class EmailStyleModel extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            menssage: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'Emails'
        })
    }
}

module.exports = EmailStyleModel;