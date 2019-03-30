
module.exports = function (sequelize, DataType) {
  var Measurements = sequelize.define("Measurements ", {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
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
    leftBicept: {
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
  }, {
      timestamps: true,
      createdAt: true
    });

  return Measurements;
};
