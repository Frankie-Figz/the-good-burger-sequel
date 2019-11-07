module.exports = function(sequelize,DataTypes){
    // var sequelize = require("../config/connection.js");

    var Burgers = sequelize.define("Burgers",{
        // Giving the burgername a type string
        burgername: {
            type: DataTypes.STRING
        },
        // Set the devour state of the burger to true or false
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
            }
    });
    
    return Burgers;
}