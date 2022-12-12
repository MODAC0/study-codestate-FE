require('mocha')
const chai = require('chai')
const expect = chai.expect
const HoneyMakerBee = require('../src/HoneyMakerBee')

describe('HoneyMakerBee class functionality', () => {
  var honeyBee;

  beforeEach(() => honeyBee = new HoneyMakerBee());

  /*  Overwrite methods from superclass  */

  it('`age` 속성은 `10`이어야 합니다', () => {
    expect(honeyBee.age).to.equal(10);
  });

  it('`job` 속성은 `make honey`이어야 합니다', () => {
    expect(honeyBee.job).to.equal('make honey')
  });

  /*  Inherited from superclass  */

  it('`color` 속성은 `Bee`로부터 상속받습니다', () => {
    expect(honeyBee.color).to.equal('yellow');
  });

  it('`food` 속성은 `Grub`으로부터 상속받습니다', () => {
    expect(honeyBee.food).to.equal('jelly');
  });

  it('`eat` 메소드는 `Grub`으로부터 상속받습니다', () => {
    expect(honeyBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('`honeyPot` 속성은 `0`이어야 합니다', () => {
    expect(honeyBee.honeyPot).to.equal(0);
  });

  it('`makeHoney` 메소드는 `honeyPot`에 1씩 추가합니다', () => {
    expect(honeyBee.makeHoney).to.be.a('function');
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(1);
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

  it('`giveHoney` 메소드는 `honeyPot`에 1씩 뺍니다', () => {
    expect(honeyBee.giveHoney).to.be.a('function');
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.giveHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

});
