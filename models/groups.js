module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        groupId: {
          type: DataTypes.INTEGER,
          PrimaryKey: true,
          autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          //somehow allow the creator to add particpants to the group
        participants: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            validate: {
              len: [1]
            }
        },

    });

    Group.associate = function(models){
      //each group has many users
      models.Group.hasMany(models.User);
    }
}