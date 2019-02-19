export class BasePage {
  private static instance: BasePage;

  constructor() {
    if (BasePage.instance) {
      return BasePage.instance;
    }
    BasePage.instance = this;
  }

  private promiseChain = Promise.resolve();

  exec(cb) {
    this.promiseChain = this.promiseChain.then(cb);
  }

  async execute() {
    await this.promiseChain;
    this.promiseChain = Promise.resolve();
  }

}
