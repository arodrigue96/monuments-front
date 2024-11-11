import "../styles/styles.css";
import "./form.css";

const createForm = (): HTMLElement => {
  const formContainer = document.createElement("main");
  formContainer.innerHTML = `
   <form class="monument-form">
        <label class="monument-form__label" for="name">Monument name</label>
        <input class="monument-form__input" type="text" id="name" required>
        <label class="monument-form__label" for="description">Description</label>
        <input class="monument-form__input" type="text" id="description" required>
        <label class="monument-form__label" for="imageUrl">Image URL</label>
        <input class="monument-form__input" type="text" id="imageUrl" required>
        <label class="monument-form__label" for="country">Country</label>
        <input class="monument-form__input" type="text" id="country" required>
        <label class="monument-form__label" for="city">City</label>
        <input class="monument-form__input" type="text" id="city" required>
        <button class="button" type="submit">Create Monument</button>
    </form>

  `;

  return formContainer;
};

export default createForm;
