const { groupBy } = require("underscore");

class Grub {
  constructor(age, color, food) {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat () {
    return 'Mmmmmmmmm jelly';
  }
}
// const test = new Grub(0,'pink','jelly');
// console.log(test.age);
// console.log(test.color);
// console.log(test.food);
// console.log(test.eat());

module.exports = Grub;