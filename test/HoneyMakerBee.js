describe('HoneyMakerBee class functionality', function() {

  verifyClass(HoneyMakerBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    honeyBee = new HoneyMakerBee();
  });

  /*  Overwrite methods from superclass  */

  it('should have an age property that is set to `10`', function() {
    expect(honeyBee.age).to.equal(10);
  });

  it('should have a job property that is set to `make honey`', function() {
    expect(honeyBee.job).to.equal('make honey')
  });

  /*  Inherited from superclass  */

  it('should have a color property inherited from `bee` that is set to `yellow`', function() {
    expect(honeyBee.color).to.equal('yellow');
  });

  it('should have a food property that is inherited from grub', function() {
    expect(honeyBee.food).to.equal('jelly');
  });

  it('should have an eat method that is inherited from grub', function() {
    expect(honeyBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `honeyPot` property that is set to `0`', function() {
    expect(honeyBee.honeyPot).to.equal(0);
  });

  it('should have a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot', function() {
    expect(honeyBee.makeHoney).to.be.a('function');
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(1);
    honeyBee.makeHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

  it('should have a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot', function() {
    expect(honeyBee.giveHoney).to.be.a('function');
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.makeHoney();
    honeyBee.giveHoney();
    expect(honeyBee.honeyPot).to.equal(2);
  });

});
