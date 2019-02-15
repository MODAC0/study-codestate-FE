require('mocha')
const chai = require('chai')
const expect = chai.expect
const ForagerBee = require('../../src/es6/ForagerBee')

describe('ForagerBee class functionality', () => {
  var foragerBee;

  beforeEach(() => foragerBee = new ForagerBee());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `10`', () => {
    expect(foragerBee.age).to.equal(10);
  });

  it('should have a `job` property that is set to `find pollen`', () => {
    expect(foragerBee.job).to.equal('find pollen');
  });

  /*  Inherited from superclass  */

  it('should have a `color` property inherited from `bee` that is set to `yellow`', () => {
    expect(foragerBee.color).to.equal('yellow');
  });

  it('should have a `food` property that is inherited from grub', () => {
    expect(foragerBee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', () => {
    expect(foragerBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `canFly` property that is set `true`', () => {
    expect(foragerBee.canFly).to.equal(true);
  });

  it('should have a `treasureChest` property that is set to an empty array `[]`', () => {
    expect(foragerBee.treasureChest).to.be.a('array');
  });

  it('should have a `forage` method that allows the bee to add a `treasure` to the `treasureChest`', () => {
    foragerBee.forage('pollen');
    foragerBee.forage('flowers');
    foragerBee.forage('gold');
    expect(foragerBee.treasureChest).to.have.length(3);
  });

});
