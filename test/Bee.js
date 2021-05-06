require('mocha')
const chai = require('chai')
const expect = chai.expect
const Bee = require('../src/Bee')

describe('Bee class functionality', () => {
  var bee;

  beforeEach(() => bee = new Bee());

  /*  Overwrite methods from superclass  */

  it('`age` 속성은 `5`이어야 합니다', () => {
    expect(bee.age).to.equal(5);
  });

  it('`color` 속성은 `yellow`이어야 합니다', () => {
    expect(bee.color).to.equal('yellow');
  });

  /*  Inherited from superclass  */

  it('`food` 속성은 Grub으로부터 상속받습니다', () => {
    expect(bee.food).to.equal('jelly');
  });

  it('`eat` 메소드는 Grub으로부터 상속받습니다', () => {
    expect(bee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('`job` 속성은 `Keep on growing`이어야 합니다', () => {
    expect(bee.job).to.equal('Keep on growing');
  });

});
