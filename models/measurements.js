module.exports = function (sequelize, DataType) {

  var Measurements = sequelize.define("Measurements", {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      primaryKey: true
    },
    weight: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    chest: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    waist: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    beltLine: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    leftBicep: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    rightBicep: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    leftForearm: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    rightForearm: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    leftThigh: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    rightThigh: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    leftCalf: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
    },
    rightCalf: {
      type: DataType.DECIMAL(10, 2),
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

  Measurements.associate = function(models) {
    Measurements.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Measurements;
};
