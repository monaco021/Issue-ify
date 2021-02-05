'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('Issue', {
    socialIssue: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {});
  Issue.associate = function(models) {
    Issue.belongsToMany(models.Artist, {
      foreignKey: 'issueId',
      otherKey: "artistId",
      through: "ArtistToIssue"
    });
  };
  return Issue;
};
