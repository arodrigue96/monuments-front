import "./createMainHeader.css";

const createMainHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  mainHeader.innerHTML = "<h1 class=main-header__title>Monuments</h1>";

  return mainHeader;
};

export default createMainHeader;
