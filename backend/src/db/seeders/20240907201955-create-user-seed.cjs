'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: 'João',
        last_name: 'Silva',
        email: 'joao@silva.com',
        password: bcrypt.hashSync('123456', 8),
        address: 'Rua Um',
        phone_number: '15987654321',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        first_name: 'José',
        last_name: 'Souza',
        email: 'jose@teste.com',
        password: bcrypt.hashSync('100Senha', 8),
        address: 'Rua Dois',
        phone_number: '15987123456',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
