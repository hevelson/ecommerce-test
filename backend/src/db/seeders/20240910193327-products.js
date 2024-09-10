'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .bulkInsert('products', [
        {
          id: 1,
          title: 'Essencial Masculino 100 ml',
          description:
            'Procurando por uma fragrância potente e com personalidade? Conheça o Essencial Deo Parfum Masculino Natura: sofisticado e intenso.',
          price: 25990,
          promotional_price: null,
          available_quantity: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'Essencial Feminino 100 ml',
          description:
            'Essencial Natura é um sofisticado buquê floral de jasmin e violeta com pitanga, ingrediente natural da biodiversidade brasileira. Para as mulheres que sabem que essencial é poder ser. Essencial valoriza o poder e elegância da mulher. Essencial é ser você e deixar sua marca por onde passar.',
          price: 25990,
          promotional_price: 17990,
          available_quantity: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'Kaiak Masculino 100 ml',
          description:
            'Experimente a refrescância única de Kaiak Desodorante Colônia Masculino. Sinta-se revigorado e confiante!',
          price: 17290,
          promotional_price: null,
          available_quantity: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          title: 'Luna Ousadia 75 ml',
          description:
            'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
          price: 16990,
          promotional_price: 10990,
          available_quantity: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ])
      .then(function () {
        queryInterface.bulkInsert('products_categories', [
          {
            product_id: 1,
            category_id: 1,
          },
          {
            product_id: 2,
            category_id: 1,
          },
          {
            product_id: 3,
            category_id: 1,
          },
          {
            product_id: 4,
            category_id: 1,
          },
        ]);
      })
      .then(function () {
        queryInterface.bulkInsert('images', [
          {
            id: 1,
            file_name: 'NATBRA-76420_2.jpg',
            path: 'storage/images/perfumaria',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            file_name: 'NATBRA-76421_2.jpg',
            path: 'storage/images/perfumaria',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            file_name: 'NATBRA-108400_2.jpg',
            path: 'storage/images/perfumaria',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 4,
            file_name: 'NATBRA-128615_2.jpg',
            path: 'storage/images/perfumaria',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);
      })
      .then(function () {
        queryInterface.bulkInsert('products_images', [
          {
            product_id: 1,
            image_id: 1,
          },
          {
            product_id: 2,
            image_id: 2,
          },
          {
            product_id: 3,
            image_id: 3,
          },
          {
            product_id: 4,
            image_id: 4,
          },
        ]);
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
