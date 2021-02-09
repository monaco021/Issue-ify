'use strict';
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    socialIssue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
     type: DataTypes.TEXT,
     allowNull: true,
    },
  }, {});
  Form.associate = function(models) {
    // associations can be defined here
  };
  return Form;
};
