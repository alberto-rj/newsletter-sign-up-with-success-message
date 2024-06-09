const componentOne = document.getElementById('component-1');
const form = document.getElementById('form');
const emailField = form.email;
const emailParent = emailField.parentNode;

const componentTwo = document.getElementById('component-2');
const dismissBtn = componentTwo.querySelector('button');
const emailOutput = document.getElementById('emailOutput');

const showError = () => {
  emailParent.classList.add('invalid');
  emailField.setAttribute('aria-invalid', 'true');
  emailField.setAttribute('aria-describedby', 'emailError');
};

const hideError = () => {
  emailParent.classList.remove('invalid');
  emailField.removeAttribute('aria-invalid');
  emailField.removeAttribute('aria-describedby');
};

const showComponent = component => {
  component.classList.remove('d-none');
  component.classList.add('slide');
  component.focus();
};

const hideComponent = component => {
  component.classList.add('d-none');
  component.classList.remove('slide');
}

const printEmailValue = () => {
  emailOutput.innerHTML = emailField.value;
  emailField.value = '';
};

const handleInput = () => {
  if (emailField.validity.valid || emailField.validity.valueMissing) {
    hideError();
  } else {
    showError();
  }
};

const handleBlur = () => {
  if (emailField.validity.valueMissing) {
    hideError();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (emailField.validity.valid) {
    hideError();
    hideComponent(componentOne);
    printEmailValue();
    showComponent(componentTwo);
  } else {
    showError();
  }
};

const handleDismiss = () => {
  hideComponent(componentTwo);
  showComponent(componentOne);
};

const addMoveAnimation = () => {
  const selector = '[class^="move-"]';
  const moves = document.querySelectorAll(selector);
  moves.forEach(move => {
    move.classList.remove('move');
    move.classList.add('move');
  });
};

emailField.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', handleDismiss);
window.addEventListener('DOMContentLoaded', addMoveAnimation);
