'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable('categories', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        parent_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'id',
          },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        title: {
          type: Sequelize.STRING,
        },
        description: {
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
        queryInterface.createTable('products_categories', {
          product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'products',
              key: 'id',
            },
          },
          category_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'categories',
              key: 'id',
            },
          },
        });
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products_categories');
    await queryInterface.dropTable('categories');
  },
};
