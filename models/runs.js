module.exports = function (sequelize, DataTypes) {
    var Run = sequelize.define("Run", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        distance: {
        type: DataTypes.float,
        allowNull: false,
        validate: {
            len: [1]
        }
        },
        time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
        }
    });


    Run.associate = function(models){
        //Each Run belongs to a User
        models.Run.belongsTo(models.User, { as: "host"});

    }

    return Run;
}