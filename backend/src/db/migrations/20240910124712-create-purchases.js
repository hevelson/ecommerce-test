'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface
      .createTable('purchases', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        status: {
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
        queryInterface.createTable('invoices', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          purchase_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'purchases',
              key: 'id',
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          amount: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          status: {
            type: Sequelize.STRING,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            type: Sequelize.DATE,
          },
        });
      })
      .then(function () {
        queryInterface.createTable('product_invoices', {
          invoice_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'invoices',
              key: 'id',
            },
          },
          product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'products',
              key: 'id',
            },
          },
          price: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          quantity: {
            type: Sequelize.INTEGER,
          },
          discount: {
            type: Sequelize.INTEGER,
          },
          total: {
            type: Sequelize.INTEGER,
          },
          created_at: {
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      })
      .then(function () {
        queryInterface.createTable('product_rates', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          product_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'products',
              key: 'id',
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          purchase_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'purchases',
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
          rate: {
            type: Sequelize.INTEGER,
          },
          created_at: {
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_rates');
    await queryInterface.dropTable('product_invoices');
    await queryInterface.dropTable('invoices');
    await queryInterface.dropTable('purchases');
  }
};
