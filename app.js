"use strict";

const emailInput = document.querySelector("#emailInput");
const formSubmitButton = document.querySelector("#formSubmitButton");
const ctaForm = document.querySelector("#ctaForm");
const emailError = document.querySelector("#emailError");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

ctaForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (emailInput.value.match(emailRegex)) {
    emailError.classList.remove("email_error_toggle");
  } else {
    emailError.classList.add("email_error_toggle");
  }
});
