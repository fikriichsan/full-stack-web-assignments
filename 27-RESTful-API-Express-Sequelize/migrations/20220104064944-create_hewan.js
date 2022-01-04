'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hewans', {
      id : {
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
        type : Sequelize.INTEGER
      },
      nama : {
        allowNull : false,
        type : Sequelize.STRING
      },
      namaspesies: {
        allowNull: false,
        type: Sequelize.STRING
      },
      umur: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hewans');
  }
};
