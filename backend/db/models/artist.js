'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    spotifyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Issue, {
      foreignKey: 'artistId',
      otherKey: "issueId",
      through: "ArtistToIssue"
    });
  };
  return Artist;
};
