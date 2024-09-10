'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        parent_id: null,
        title: "Perfumaria",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        parent_id: null,
        title: "Corpo e banho",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        parent_id: null,
        title: "Cabelos",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        parent_id: null,
        title: "Rosto",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        parent_id: 4,
        title: "demaquilante",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
