import createApp from "./components/app/createApp";
import createMainHeader from "./components/header/createMainHeader";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

const appContent = createApp();
const mainHeader = createMainHeader();

root.appendChild(mainHeader);
root.appendChild(appContent);
