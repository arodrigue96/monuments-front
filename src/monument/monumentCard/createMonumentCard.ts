import { type Monument } from "../types";
import "./monumentCard.css";

const createMonumentCard = ({ name }: Monument): HTMLElement => {
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("monument-cards-lists__card");

  cardContainer.innerHTML = `
  <h2 class='card__title'>${name}</h2>
  `;

  return cardContainer;
};

export default createMonumentCard;
