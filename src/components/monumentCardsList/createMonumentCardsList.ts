import "./monumentsCardsList.css";

export const createMonumentCardsList = (): HTMLUListElement => {
  const monumentCardsList = document.createElement("ul");
  monumentCardsList.classList.add("monument-cards-lists");

  return monumentCardsList;
};

export default createMonumentCardsList;
