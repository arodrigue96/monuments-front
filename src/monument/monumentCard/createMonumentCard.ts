import { type Monument } from "../types";
import "./monumentCard.css";

const createMonumentCard = ({ name }: Monument): HTMLLIElement => {
  const cardContainer = document.createElement("li");
  cardContainer.classList.add("monument-cards-lists__card");

  cardContainer.innerHTML = `
  <article>
    <h2 class='card__title'>${name}</h2>
  </article>
  `;

  return cardContainer;
};

export default createMonumentCard;
