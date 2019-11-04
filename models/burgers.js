module.exports = function(sequelize,DataTypes){
    var sequelize = require("../config/connection.js");

    var Burgers = sequelize.define("Burgers",{
        name: {type: DataTypes.STRING, allowNull: false},
        devoured: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
        createdAt: {type: DataTypes.TIMESTAMP, defaultValue: Timestamp.now()}
    });
    
    return Burgers;
}