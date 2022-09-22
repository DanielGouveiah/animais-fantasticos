import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-animacao.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/toolTip.js";
import AnimaisFetch from "./modules/animais-fetch.js";
import DropdownMenu from "./modules/dropdownMenu";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import MenuMobile from "./modules/menuMobile";

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

const tooltip = new ToolTip("[data-toolTip]");
tooltip.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

initFuncionamento();

AnimaisFetch("../../animaisapi.json", ".numeros-grid");
FetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
