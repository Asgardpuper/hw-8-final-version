import lodash from "lodash.throttle";

const FEEDBACK_DATA = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");

form.addEventListener("input", lodash(onInputChange, 500));
form.addEventListener("submit", onFormSubmit);

function onInputChange(e) {
	const inputData = {
		email: inputEl.value,
		message: textareaEl.value,
	};
	localStorage.setItem(FEEDBACK_DATA, JSON.stringify(inputData));
}

function onFormSubmit(evt) {
	evt.preventDefault();
	const savedData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));
	form.reset();
	localStorage.removeItem(FEEDBACK_DATA);
}

if (localStorage.getItem(FEEDBACK_DATA)) {
	const outputData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));
	inputEl.value = outputData.email;
	textareaEl.value = outputData.message;
}
