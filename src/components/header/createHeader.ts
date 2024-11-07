import "./header.css";

const createHeader = (): HTMLElement => {
  const mainHeader = document.createElement("header");
  mainHeader.classList.add("main-header");

  mainHeader.innerHTML = `
  <h1>Monuments</h1>
  <ul class='selection-menu'>
    <li class='selection-menu__anchor-container'>
      <a class='selection-menu__link' href=''><span>Monuments</span></a>
    </li>
    <li class='selection-menu__anchor-container'>
      <a class='selection-menu__link' href=''><span>Add Monument</span></a>
    </li>
  </ul>
  `;

  return mainHeader;
};

export default createHeader;
