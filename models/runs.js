module.exports = function (sequelize, DataTypes) {
    var Run = sequelize.define("Run", {
        runId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
}