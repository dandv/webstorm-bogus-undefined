export class Bug {
  constructor() {
    this.bar = 'foo';
    return (async () => {
      this.foo = 'constructed';
      return this;
    })();
  }
}
