import { createMainContent } from "../monumentCard";
import "./createApp.css";

const createApp = (): HTMLElement => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("main-container");

  const mainContent = createMainContent();
  appContainer.appendChild(mainContent);

  return appContainer;
};

export default createApp;
