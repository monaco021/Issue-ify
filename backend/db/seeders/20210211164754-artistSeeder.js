'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artists", [
      {
        artistName: "Lana Del Rey",
        spotifyId: "00FQb4jTyendYWaN8pK0wa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artistName: "Jaden Smith",
        spotifyId: "0xOeVMOz2fVg5BJY3N6akT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artistName: "Childish Gambino",
        spotifyId: "73sIBHcqh3Z3NyqHKZ7FOL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artistName: "Paul McCartney",
        spotifyId: "4STHEaNw4mPZ2tzheohgXB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artistName: "Billie Eilish",
        spotifyId: "6qqNVTkY8uBg9cP3Jd7DAH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});

  }
};
