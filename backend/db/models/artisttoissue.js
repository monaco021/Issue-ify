'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistToIssue = sequelize.define('ArtistToIssue', {
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  ArtistToIssue.associate = function(models) {
    // associations can be defined here
  };
  return ArtistToIssue;
};
