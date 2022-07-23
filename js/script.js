import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-animacao.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initDropDown from "./modules/dropdownMenu.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import initMenuMobile from "./modules/menuMobile.js";
import innitScrollAnimation from "./modules/scroll-animacao.js";
import initToolTip from "./modules/toolTip.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const navTab = new TabNav("[data-tab='menu'] li", "[data-tab='content']  section");
navTab.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();
innitScrollAnimation();
