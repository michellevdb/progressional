
module.exports = function (sequelize, DataType) {
  var Fitness = sequelize.define("measurements", {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      primaryKey: true
    },
    weight: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    chest: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    waist: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    beltLine: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    leftBicept: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    rightBicep: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    leftForearm: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    rightForearm: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    leftThigh: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    rightThigh: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    leftCalf: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    rightCalf: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
      timestamps: true,
      createdAt: true
    });

  return Fitness;
};
