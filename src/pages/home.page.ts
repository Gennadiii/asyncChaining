import {BasePage} from "./base.page";
import {sleep} from "../helpers/sleep.helper";


export class HomePage {

  constructor(private basePage: BasePage) {
  }

  async getWelcomeText() {
    await this.basePage.execute();
    console.log('Getting welcome text');
    await sleep(1000);
    return `Good luck with the new job, Hayk!`;
  }

}
