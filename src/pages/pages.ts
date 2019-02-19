import {LoginPage} from "./login.page";
import {HomePage} from "./home.page";
import {BasePage} from "./base.page";


const basePage = new BasePage();


export const pages = {
  login: new LoginPage(basePage),
  home: new HomePage(basePage),
};
