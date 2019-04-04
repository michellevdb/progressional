module.exports = function (sequelize, DataType) {

    var User = sequelize.define("User", {

        name: {
            type: DataType.STRING,
            allowNull: false,
        },

        createdAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataType.DATE,
        },
        updatedAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataType.DATE,
        }

    });

    User.associate = function (models) {
        User.hasMany(models.Measurements, {
            onDelete: "cascade"
        });
    };

    return User;
};