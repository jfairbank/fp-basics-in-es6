describe('api', () => {
  beforeEach(() => mockConsoleLog());
  afterEach(() => restoreConsoleLog());

  it('sets and prints the name', () => {
    printUpperName();

    expect(console.log).calledWith('JEREMY');

    n.setName('Jet');
    printUpperName();

    expect(console.log).calledWith('JET');
  });
});
