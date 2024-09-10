'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('banners', [
      {
        id: 1,
        section: 'home',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        section: 'home',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
    .then(function () {
      queryInterface.bulkInsert('images', [
        {
          id: 5,
          file_name: 'DESK_RIR_E_se_02_09_24.jpg',
          path: 'storage/images/banners',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          file_name: 'DESK_RIR_Faces_02_09_24.jpg',
          path: 'storage/images/banners',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    })
    .then(function () {
      queryInterface.bulkInsert('banners_images', [
        {
          banner_id: 1,
          image_id: 5,
        },
        {
          banner_id: 2,
          image_id: 6,
        },
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('banners');
  },
};
