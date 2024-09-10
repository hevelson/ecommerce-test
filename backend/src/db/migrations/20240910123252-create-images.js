'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable('images', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        file_name: {
          type: Sequelize.STRING,
        },
        path: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
      })
      .then(function () {
        queryInterface.createTable('products_images', {
          product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'products',
              key: 'id',
            },
          },
          image_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'images',
              key: 'id',
            },
          },
        });
      })
      .then(function () {
        queryInterface.createTable('banners_images', {
          banner_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'banners',
              key: 'id',
            },
          },
          image_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'images',
              key: 'id',
            },
          },
        });
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products_images');
    await queryInterface.dropTable('banners_images');
    await queryInterface.dropTable('images');
  },
};
