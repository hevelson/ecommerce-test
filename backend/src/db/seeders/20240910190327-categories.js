'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        parent_id: null,
        title: 'Perfumaria',
        description: '',
        slug: 'perfumaria',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        parent_id: null,
        title: 'Corpo e banho',
        description: '',
        slug: 'corpo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        parent_id: null,
        title: 'Cabelos',
        description: '',
        slug: 'cabelos',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        parent_id: null,
        title: 'Rosto',
        description: '',
        slug: 'rosto',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        parent_id: 4,
        title: 'home',
        description: '',
        slug: 'home',
        listed: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
