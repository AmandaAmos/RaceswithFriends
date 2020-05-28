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
          type: DataTypes.STRING,
          get: function() {
            return JSON.parse(this.getDataValue("participants"));
          }, 
          set: function(val) {
              return this.setDataValue("participants", JSON.stringify(val));
          }
      }
    });

    Group.associate = function(models){
      //each group has many users
      models.Group.hasMany(models.User);
    }
    return Group;
}