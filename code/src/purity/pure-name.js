const upperName = (name) => name.toUpperCase();

describe('api', () => {
  it('returns an uppercase name', () => {
    expect(upperName('Jeremy')).to.equal('JEREMY');
    expect(upperName('Jet')).to.equal('JET');
  });
});
