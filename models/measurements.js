module.exports = function(sequelize, DataTypes) {
  var Measurements = sequelize.define("Measurements", {
    name: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    chest: DataTypes.INTEGER,
    waist: DataTypes.INTEGER,
    beltLine: DataTypes.INTEGER,
    leftBicep: DataTypes.INTEGER,
    rightBicep: DataTypes.INTEGER,
    leftForearm: DataTypes.INTEGER,
    rightForearm: DataTypes.INTEGER,
    leftThigh: DataTypes.INTEGER,
    rightThigh: DataTypes.INTEGER,
    leftCalve: DataTypes.INTEGER,
    rightCalve: DataTypes.INTEGER
  });
  return Measurements;
};
