import "./header.css";

const createHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  mainHeader.innerHTML = "<h1>Monuments</h1>";

  return mainHeader;
};

export default createHeader;
