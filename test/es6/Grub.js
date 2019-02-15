require('mocha')
const chai = require('chai')
const expect = chai.expect
const Grub = require('../../src/es6/Grub')

describe('Grub class functionality', () => {
  var grub;

  beforeEach(() => grub = new Grub());

  it('should have an `age` property that is set to `0`', () => {
    expect(grub.age).to.equal(0);
  });

  it('should have a `color` property that is set to `pink`', () => {
    expect(grub.color).to.equal('pink');
  });

  it('should have a `food` property that is set to `jelly`', () => {
    expect(grub.food).to.equal('jelly');
  });

  it('should have an `eat` method', () => {
    expect(grub.eat).to.be.a('function');
  });

  it('should eat jelly', () => {
    expect(grub.eat()).to.equal('Mmmmmmmmm jelly');
  });
});
