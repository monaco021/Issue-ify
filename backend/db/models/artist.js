'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spotifyId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Artist.associate = function(models) {
    Artist.belongsToMany(models.Issue, {
      foreignKey: 'artistId',
      otherKey: "issueId",
      through: "ArtistToIssue"
    });
  };
  return Artist;
};
