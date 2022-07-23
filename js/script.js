import Accordion from "./modules/accordion-animacao.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initDropDown from "./modules/dropdownMenu.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import initMenuMobile from "./modules/menuMobile.js";
import initModal from "./modules/modal.js";
import TabNav from "./modules/tabnav.js";
import innitScrollAnimation from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initToolTip from "./modules/toolTip.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const navTab = new TabNav("[data-tab='menu'] li", "[data-tab='content']  section");
navTab.init();

innitScrollAnimation();
initModal();
initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();
