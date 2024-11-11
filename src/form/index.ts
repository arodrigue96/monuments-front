import createHeader from "../components/header/createHeader";
import createForm from "./createForm";
import "../styles/styles.css";
import "../components/header/header.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

const header = createHeader();
const form = createForm();

root.appendChild(header);
root.appendChild(form);
