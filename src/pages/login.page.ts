import {BasePage} from "./base.page";
import {sleep} from "../helpers/sleep.helper";
import {HomePage} from "./home.page";


export class LoginPage {

  constructor(private basePage: BasePage) {
  }

  openPage() {
    this.basePage.exec(async () => {
      console.log('Doing several things');
      await openPage();
      await waitForHappiness();
    });
    return this;
  }

  enterLogin(login) {
    this.basePage.exec(async () => {
      console.log(`Entering login: ${login}`);
      await sleep(1500);
    });
    return this;
  }

  enterPassword(password) {
    this.basePage.exec(async () => {
      console.log(`Entering password: ${password}`);
      await sleep(1500);
    });
    return this;
  }

  clickLoginButton() {
    this.basePage.exec(async () => {
      console.log(`Clicking login button`);
      await sleep(1500);
    });
    return {home: new HomePage(new BasePage())};
  }

}


async function openPage() {
  console.log('Opening page');
  await sleep(3000);
}

async function waitForHappiness() {
  console.log('Waiting for happiness');
  await sleep(1000);
}


