"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.addColumn("Snippets", "username", Sequelize.STRING);
    // return queryInterfact.dropTable("Snippets");
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.removeColumn("Snippets", "username");
    // return queryInterface.addTable("Snippets);
  }
};
