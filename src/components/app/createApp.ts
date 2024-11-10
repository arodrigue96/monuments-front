import getMonuments from "../../monument/getMonuments";
import { createMonumentCardsList } from "../../monument/monumentsCardsList/createMonumentsCardsList";
import createHeader from "../header/createHeader";
import "./app.css";

const { monuments } = await getMonuments();

const createApp = (): HTMLElement => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("main-container");

  const mainHeader = createHeader();
  const monumentCardsList = createMonumentCardsList(monuments);

  appContainer.appendChild(mainHeader);
  appContainer.appendChild(monumentCardsList);

  return appContainer;
};

export default createApp;
