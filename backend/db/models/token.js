'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    tokenKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};
