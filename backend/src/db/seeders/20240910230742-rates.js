'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .bulkInsert('purchases', [
        {
          id: 1,
          user_id: 1,
          status: 'finished',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          status: 'finished',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          user_id: 1,
          status: 'finished',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          user_id: 1,
          status: 'finished',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      await queryInterface.bulkInsert('invoices', [
        {
          id: 1,
          purchase_id: 1,
          amount: 25990,
          status: 'invoiced',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          purchase_id: 2,
          amount: 25990,
          status: 'invoiced',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          purchase_id: 3,
          amount: 17290,
          status: 'invoiced',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          purchase_id: 4,
          amount: 16990,
          status: 'invoiced',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      await queryInterface.bulkInsert('product_invoices', [
        {
          invoice_id: 1,
          product_id: 1,
          price: 25990,
          quantity: 1,
          discount: 0,
          total: 25990,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          invoice_id: 2,
          product_id: 2,
          price: 25990,
          quantity: 1,
          discount: 0,
          total: 25990,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          invoice_id: 3,
          product_id: 3,
          price: 17290,
          quantity: 1,
          discount: 0,
          total: 17290,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          invoice_id: 4,
          product_id: 4,
          price: 16990,
          quantity: 1,
          discount: 0,
          total: 16990,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      await queryInterface.bulkInsert('product_rates', [
        {
          id: 1,
          product_id: 1,
          user_id: 1,
          purchase_id: 1,
          title: 'Muito bom',
          description: 'Lorem ipsum dorlor sit amet',
          rate: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          product_id: 2,
          user_id: 1,
          purchase_id: 2,
          title: 'Muito bom',
          description: 'Lorem ipsum dorlor sit amet',
          rate: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          product_id: 3,
          user_id: 1,
          purchase_id: 3,
          title: 'Muito bom',
          description: 'Lorem ipsum dorlor sit amet',
          rate: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          product_id: 4,
          user_id: 1,
          purchase_id: 4,
          title: 'Muito bom',
          description: 'Lorem ipsum dorlor sit amet',
          rate: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_rates', null, {});
    await queryInterface.bulkDelete('product_invoices', null, {});
    await queryInterface.bulkDelete('invoices', null, {});
    await queryInterface.bulkDelete('purchases', null, {});
  },
};
