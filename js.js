"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const LangSelect = document.querySelector("select[name='sprog']");

LangSelect.addEventListener("change", chooseLang);

function chooseLang() {
  let locale = LangSelect.value;
  let sprog = Object.values(texts[locale].texts);
  sprog.forEach((tekst) => {
    let loc = document.querySelector(tekst.location);
    loc.textContent = tekst.text;
    console.log(tekst);
  });
}
chooseLang();
