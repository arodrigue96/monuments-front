import { type Monument } from "../types";
import "./monumentCard.css";

const createMonumentCard = ({
  name,
  description,
  imageUrl,
  country,
  city,
}: Monument): HTMLLIElement => {
  const cardContainer = document.createElement("li");

  cardContainer.innerHTML = `
  <article class='monument-cards-lists__card'>
    <img class='card__image' src='${imageUrl}' alt='Monument: ${name}'  width='340' height='250'>
    <div class='card__monument-information'>
      <h2 class='card__title'>${name}</h2>
      <span class='card__description'>${description}</span>
      <div class='card__location'>
        <span>Country: ${country}</span> 
        <span>City: ${city}</span>
      </div>
    </div>
  </article>
  `;

  return cardContainer;
};

export default createMonumentCard;
