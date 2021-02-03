// import "../scss/index.scss";
import Counter from "./counter";
import intlTelInput from "intl-tel-input";

if (document.querySelector("#numberTop")) {
  const inputTop = document.querySelector("#numberTop");
  intlTelInput(inputTop, {
    initialCountry: "ua",
  });
}
if (document.querySelector("#numberBottom")) {
  const inputBottom = document.querySelector("#numberBottom");
  intlTelInput(inputBottom, {
    initialCountry: "ua",
  });
}

if (document.querySelector('[data-counter="counter"]')) {
  const counter = new Counter('[data-counter="counter"]', 170, 10, 5000);
}
if (document.querySelector('[data-counter="counter-peoples"]')) {
  const counterPeoples = new Counter(
    '[data-counter="counter-peoples"]',
    10,
    2,
    7000
  );
}

document.addEventListener("DOMContentLoaded", function (event) {
  const url = decodeURIComponent(window.location.search);
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const nameBottom = document.querySelector("#nameBottom");
  const emailBottom = document.querySelector("#emailBottom");
  const indexName = url.indexOf("=") + 1;
  const indexEmail = url.indexOf("&email=");

  name.value = url.slice(indexName, indexEmail);
  email.value = url.slice(indexEmail + 7);
  nameBottom.value = url.slice(indexName, indexEmail);
  emailBottom.value = url.slice(indexEmail + 7);
  if (window.location.search) {
    window.history.replaceState("/", document.title, "/registration.html");
  }
});

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("click", (event) => {
    event.target.previousElementSibling.remove();
  });
});
