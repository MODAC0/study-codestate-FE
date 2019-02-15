require('mocha')
const chai = require('chai')
const expect = chai.expect
const Bee = require('../../src/es6/Bee')

describe('Bee class functionality', () => {
  var bee;

  beforeEach(() => bee = new Bee());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `5`', () => {
    expect(bee.age).to.equal(5);
  });

  it('should have a `color` property that is set to `yellow`', () => {
    expect(bee.color).to.equal('yellow');
  });

  /*  Inherited from superclass  */

  it('should have a `food` property that is inherited from grub', () => {
    expect(bee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', () => {
    expect(bee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `job` property that is set to `Keep on growing`', () => {
    expect(bee.job).to.equal('Keep on growing');
  });

});
