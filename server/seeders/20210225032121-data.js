'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [{
      name: '노른자 분리기',
      price: 9900,
      image: '../images/egg.png'
    }, {
      name: '2020년 달력',
      price: 12000,
      image: '../images/2020.jpg'
    }, {
      name: '개구리 안대',
      price: 2900,
      image: '../images/frog.jpg'
    }, {
      name: '뜯어온 보도블럭',
      price: 4900,
      image: '../images/block.jpg'
    }, {
      name: '칼라 립스틱',
      price: 2900,
      image: '../images/lip.jpg'
    }, {
      name: '잉어 슈즈',
      price: 3900,
      image: '../images/fish.jpg'
    }, {
      name: '웰컴 매트',
      price: 6900,
      image: '../images/welcome.jpg'
    }, {
      name: '강시 모자',
      price: 9900,
      image: '../images/hat.jpg'
    }
    ], null, ['name', 'price', 'image']);

    await queryInterface.bulkInsert('users', [{
      username: '김코딩'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
