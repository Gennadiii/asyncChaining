import {pages} from "./src/pages/pages";


void async function test() {
  try {

    const welcomeText = await pages.login
      .openPage()
      .enterLogin('Hayk')
      .enterPassword('superman')
      .clickLoginButton()
      .home.getWelcomeText();

    console.log(welcomeText);

  } catch (err) {
    console.log(err);
  }
}();
