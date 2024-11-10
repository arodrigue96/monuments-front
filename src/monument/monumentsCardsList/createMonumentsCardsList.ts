import createMonumentCard from "../monumentCard/createMonumentCard";
import { type Monument } from "../types";
import "./monumentsCardsList.css";

const createMonumentsCardList = (monuments: Monument[]): HTMLLIElement[] => {
  const monumentCardList: HTMLLIElement[] = [];

  monuments.forEach((monument) => {
    const monumentCard = createMonumentCard(monument);

    monumentCardList.push(monumentCard);
  });

  return monumentCardList;
};

export const createMonumentCardsList = (
  monuments: Monument[],
): HTMLUListElement => {
  const monumentCardsList = document.createElement("ul");
  monumentCardsList.classList.add("monument-cards-lists");

  const monumentsCards = createMonumentsCardList(monuments);

  monumentsCards.forEach((monumentCard) =>
    monumentCardsList.appendChild(monumentCard),
  );

  return monumentCardsList;
};

export default createMonumentCardsList;
