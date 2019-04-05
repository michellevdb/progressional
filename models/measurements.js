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
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    chest: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    waist: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    beltLine: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    leftBicep: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    rightBicep: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    leftForearm: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    rightForearm: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    leftThigh: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    rightThigh: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    leftCalf: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
    },
    rightCalf: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false,
      isFloat: {
        msg: "Value entered must be a number"
      },
      len: [1,10],
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
