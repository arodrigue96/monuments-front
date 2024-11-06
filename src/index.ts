import createApp from "./components/app/createApp";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

const appContent = createApp();
root.appendChild(appContent);
