const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        first_name: "João",
        last_name: "Silva",
        email: "joao@silva.com",
        password: bcrypt.hashSync("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
