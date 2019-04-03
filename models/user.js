module.exports = function (sequelize, DataType) {

    var User = sequelize.define("User", {

        name: {
           type:  DataType.STRING,
           allowNull: false,
        },
  
    });

    User.associate = function(models) {
        User.hasMany(models.Measurements, {
            onDelete: "cascade"
        });
    }
  
    return User;
  };