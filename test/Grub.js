describe('Grub class functionality', function() {

  verifyClass(Grub).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    grub = new Grub();
  });

  it('should have an `age` property that is set to `0`', function() {
    expect(grub.age).to.equal(0);
  });

  it('should have a `color` property that is set to `pink`', function() {
    expect(grub.color).to.equal('pink');
  });

  it('should have a `food` property that is set to `jelly`', function() {
    expect(grub.food).to.equal('jelly');
  });

  it('should have an `eat` method', function() {
    expect(grub.eat).to.be.a('function');
  });

});
