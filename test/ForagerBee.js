require('mocha');
const chai = require('chai');
const expect = chai.expect;
const ForagerBee = require('../src/ForagerBee');

describe('ForagerBee class functionality', () => {
  var foragerBee;

  beforeEach(() => (foragerBee = new ForagerBee()));

  /*  Overwrite methods from superclass  */

  it('`age` 속성은 `10`이어야 합니다', () => {
    expect(foragerBee.age).to.equal(10);
  });

  it('`job` 속성은 `find pollen`이어야 합니다', () => {
    expect(foragerBee.job).to.equal('find pollen');
  });

  /*  Inherited from superclass  */

  it('`color` 속성은 `Bee`로부터 상속받습니다', () => {
    expect(foragerBee.color).to.equal('yellow');
  });

  it('`food` 속성은 `Grub`으로부터 상속받습니다', () => {
    expect(foragerBee.food).to.equal('jelly');
  });

  it('`eat` 메소드는 `Grub`으로부터 상속받습니다', () => {
    expect(foragerBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('`canFly` 속성은 `true`이어야 합니다', () => {
    expect(foragerBee.canFly).to.equal(true);
  });

  it('`treasureChest` 속성은 빈 배열 `[]`이어야 합니다', () => {
    expect(foragerBee.treasureChest).to.be.a('array');
  });

  it('`forage` 메소드를 통해 `treasureChest` 속성에 보물을 추가할 수 있어야 합니다', () => {
    foragerBee.forage('pollen');
    foragerBee.forage('flowers');
    foragerBee.forage('gold');
    expect(foragerBee.treasureChest).to.have.length(3);
    expect(foragerBee.treasureChest[0]).to.equal('pollen');
    expect(foragerBee.treasureChest[1]).to.equal('flowers');
    expect(foragerBee.treasureChest[2]).to.equal('gold');
  });
});
