import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const LS_KEY = 'feedback-form-state';
onCheckEnteredData();

function onFormInput() {
  const formData = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
  return formData;
}
function onCheckEnteredData() {
  const enteredData = JSON.parse(localStorage.getItem(LS_KEY));
  if (enteredData) {
    emailEl.value = enteredData.email;
    messageEl.value = enteredData.message;
  }
}
function onFormSubmit(e) {
  if (emailEl.value === '' || messageEl.value === '') {
    alert(`Enter your Email and Message`);
    return;
  }
  e.preventDefault();
  console.log(onFormInput());
  localStorage.removeItem(LS_KEY);
  e.target.reset();
}
