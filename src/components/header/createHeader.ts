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

export const createSelectionStatus = (): void => {
  const heading = document.querySelector("h1");

  if (!heading) {
    throw new Error("Header not found");
  }

  const monumentSelection = document.querySelectorAll(
    ".selection-menu__anchor-container",
  );

  monumentSelection.forEach((anchor) => {
    const anchorSpan = anchor.children;
    const anchorText = anchorSpan[0].textContent;

    if (anchorText === heading.textContent) {
      anchor.classList.add("hover");
    }
  });
};

export default createHeader;
