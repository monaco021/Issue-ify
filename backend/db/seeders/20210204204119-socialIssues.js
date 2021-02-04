'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Issues', [
      {
        socialIssue: "Climate Change",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "lgbtqa+ rights",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "Women's rights",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "BLM",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Issues", null, {});
  }
};
