module.exports = function (sequelize, DataTypes) {
    var Run = sequelize.define("Run", {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [8]
        }
        },
        distance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                len: [1]
        }
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
        }
        }
    });


    Run.associate = function(models){
        //Each Run belongs to a User
        models.Run.belongsTo(models.User, { as: "host"});
    }

    return Run;
}