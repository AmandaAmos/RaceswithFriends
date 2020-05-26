module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
        }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
        }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // associating Users table to Runs
    User.associate = function(models){
        //Each User belongs to a Group
        models.User.belongsTo(models.Group, {as: "host"})
        // Each User can have many Runs
        models.User.hasMany(models.Run, {
        // this deletes all associated Runs a User is deleted
        onDelete: "cascade"
        })
    }

    return User;
}