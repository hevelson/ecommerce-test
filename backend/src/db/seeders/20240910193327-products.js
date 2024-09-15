'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
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
      {
        id: 5,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 18,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 19,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 20,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 21,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 22,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 23,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 24,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 25,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 26,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 27,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 28,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 29,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 30,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 31,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 32,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 33,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 34,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 35,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 36,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 37,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 38,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 39,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 40,
        title: 'Luna Ousadia 75 ml',
        description:
          'Luna Ousadia é um convite para você acreditar em si mesma e dizer ao mundo quem você é. Uma nova versão ousada do chipre Natura, feita por nossa perfumista exclusiva Verônica Kato e inspirada nas mulheres que acreditam em si mesmas, se projetam e conquistam seus espaços. Nessa fragrância, o chipre Natura encontra com a luminosidade da exótica flor da pitaya e a vibração das frutas vermelhas.',
        price: 16990,
        promotional_price: 10990,
        available_quantity: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('products_categories', [
      { product_id: 1, category_id: 1 },
      { product_id: 2, category_id: 1 },
      { product_id: 3, category_id: 1 },
      { product_id: 4, category_id: 1 },
      { product_id: 5, category_id: 1 },
      { product_id: 6, category_id: 1 },
      { product_id: 7, category_id: 1 },
      { product_id: 8, category_id: 1 },
      { product_id: 9, category_id: 1 },
      { product_id: 10, category_id: 1 },
      { product_id: 11, category_id: 2 },
      { product_id: 12, category_id: 2 },
      { product_id: 13, category_id: 2 },
      { product_id: 14, category_id: 2 },
      { product_id: 15, category_id: 2 },
      { product_id: 16, category_id: 2 },
      { product_id: 17, category_id: 2 },
      { product_id: 18, category_id: 2 },
      { product_id: 19, category_id: 2 },
      { product_id: 20, category_id: 2 },
      { product_id: 21, category_id: 3 },
      { product_id: 22, category_id: 3 },
      { product_id: 23, category_id: 3 },
      { product_id: 24, category_id: 3 },
      { product_id: 25, category_id: 3 },
      { product_id: 26, category_id: 3 },
      { product_id: 27, category_id: 3 },
      { product_id: 28, category_id: 3 },
      { product_id: 29, category_id: 3 },
      { product_id: 30, category_id: 3 },
      { product_id: 31, category_id: 4 },
      { product_id: 32, category_id: 4 },
      { product_id: 33, category_id: 4 },
      { product_id: 34, category_id: 4 },
      { product_id: 35, category_id: 4 },
      { product_id: 36, category_id: 4 },
      { product_id: 37, category_id: 4 },
      { product_id: 38, category_id: 4 },
      { product_id: 39, category_id: 4 },
      { product_id: 40, category_id: 4 },
      { product_id: 1, category_id: 5 },
      { product_id: 2, category_id: 5 },
      { product_id: 3, category_id: 5 },
      { product_id: 4, category_id: 5 },
      { product_id: 5, category_id: 5 },
      { product_id: 6, category_id: 5 },
      { product_id: 7, category_id: 5 },
      { product_id: 8, category_id: 5 },
    ]);
    await queryInterface.bulkInsert('images', [
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
    await queryInterface.bulkInsert('products_images', [
      { product_id: 1, image_id: 1 },
      { product_id: 2, image_id: 2 },
      { product_id: 3, image_id: 3 },
      { product_id: 4, image_id: 4 },
      { product_id: 5, image_id: 1 },
      { product_id: 6, image_id: 2 },
      { product_id: 7, image_id: 3 },
      { product_id: 8, image_id: 4 },
      { product_id: 9, image_id: 1 },
      { product_id: 10, image_id: 1 },
      { product_id: 11, image_id: 2 },
      { product_id: 12, image_id: 3 },
      { product_id: 13, image_id: 4 },
      { product_id: 14, image_id: 1 },
      { product_id: 15, image_id: 2 },
      { product_id: 16, image_id: 3 },
      { product_id: 17, image_id: 4 },
      { product_id: 18, image_id: 1 },
      { product_id: 19, image_id: 2 },
      { product_id: 20, image_id: 3 },
      { product_id: 21, image_id: 4 },
      { product_id: 22, image_id: 1 },
      { product_id: 23, image_id: 2 },
      { product_id: 24, image_id: 3 },
      { product_id: 25, image_id: 4 },
      { product_id: 26, image_id: 1 },
      { product_id: 27, image_id: 2 },
      { product_id: 28, image_id: 3 },
      { product_id: 29, image_id: 4 },
      { product_id: 30, image_id: 1 },
      { product_id: 31, image_id: 2 },
      { product_id: 32, image_id: 3 },
      { product_id: 33, image_id: 4 },
      { product_id: 34, image_id: 1 },
      { product_id: 35, image_id: 2 },
      { product_id: 36, image_id: 3 },
      { product_id: 37, image_id: 4 },
      { product_id: 38, image_id: 2 },
      { product_id: 39, image_id: 3 },
      { product_id: 40, image_id: 4 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
