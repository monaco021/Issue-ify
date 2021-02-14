'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Issues', [
      {
        socialIssue: "Climate Change",
        imageUrl: "https://images.unsplash.com/photo-1562089727-90aa996a6f18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "lgbtqa+ rights",
        imageUrl: "https://images.unsplash.com/photo-1533591917057-a0b77b40de75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "Women's rights",
        imageUrl: "https://images.unsplash.com/photo-1488942446680-85dd7de440ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socialIssue: "BLM",
        imageUrl: "https://images.unsplash.com/photo-1591826246299-9113fd782020?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Issues", null, {});
  }
};
