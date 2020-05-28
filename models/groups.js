module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          //somehow allow the creator to add particpants to the group
        participants: {
            type: DataTypes.ARRAY(DataTypes.User),
            validate: {
              len: [1]
            }
        },

    });

    Group.associate = function(models){
      //each group has many users
      models.Group.hasMany(models.User);
    }

    return Group;
}