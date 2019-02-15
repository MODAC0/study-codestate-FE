require('mocha')
const chai = require('chai')
const expect = chai.expect
const HoneyMakerBee = require('../../src/es6/HoneyMakerBee')

describe('HoneyMakerBee class functionality', () => {
  var honeyBee;

  beforeEach(() => honeyBee = new HoneyMakerBee());

  /*  Overwrite methods from superclass  */

  it('should have an age property that is set to `10`', () => {
    expect(honeyBee.age).to.equal(10);
  });

  it('should have a job property that is set to `make honey`', () => {
    expect(honeyBee.job).to.equal('make honey')
  });

  /*  Inherited from superclass  */

  it('should have a color property inherited from `bee` that is set to `yellow`', () => {
    expect(honeyBee.color).to.equal('yellow');
  });

  it('should have a food property that is inherited from grub', () => {
    expect(honeyBee.food).to.equal('jelly');
  });

  it('should have an eat method that is inherited from grub', () => {
    expect(honeyBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `honeyPot` property that is set to `0`', () => {
    expect(honeyBee.honeyPot).to.equal(0);
  });

  it('should have a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot', () => {
    expect(honeyBee.makeHoney).to.be.a('function');
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(1);
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

  it('should have a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot', () => {
    expect(honeyBee.giveHoney).to.be.a('function');
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.giveHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

});
