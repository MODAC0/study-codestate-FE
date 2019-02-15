require('mocha')
const chai = require('chai')
const expect = chai.expect
const RetiredForagerBee = require('../../src/es6/RetiredForagerBee')

describe('RetiredForagerBee class functionality', () => {
  var retiredForagerBee;

  beforeEach(() => retiredForagerBee = new RetiredForagerBee());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `40`', () => {
    expect(retiredForagerBee.age).to.equal(40);
  });

  it('should have a `job` property that is set to `gamble`', () => {
    expect(retiredForagerBee.job).to.equal('gamble');
  });

  it('should have a `canFly` property that is set to `false`', () => {
    expect(retiredForagerBee.canFly).to.equal(false);
  });

  it('should have a `color` property that is set to `grey`', () => {
    expect(retiredForagerBee.color).to.equal('grey');
  });

  it('should have a `forage` method that returns "I am too old, let me play cards instead"', () => {
    expect(retiredForagerBee.forage()).to.equal('I am too old, let me play cards instead');
  });

  /*  Inherited from superclass  */

  it('should have a `food` property that is inherited from grub', () => {
    expect(retiredForagerBee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', () => {
    expect(retiredForagerBee.eat).to.be.a('function');
  });

  it('should have a `treasureChest` property inherited from foragerBee that is set to an empty array `[]`', () => {
    expect(retiredForagerBee.treasureChest).to.be.a('array');
  });

  /*  New methods and properties  */

  it('should have an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`', () => {
    retiredForagerBee.gamble();
    retiredForagerBee.gamble();
    expect(retiredForagerBee.treasureChest).to.have.length(2);
  });

});
