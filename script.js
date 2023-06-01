const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copy = document.getElementById("copy");
const button = document.getElementById("button");
const url = "https://api.quotable.io/random";

function getQuote() {
  fetch(url).then(response=>response.json().then(result => {
    quote.innerText = result.content;
    author.innerText = "~ " + result.author;
  }));
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText + author.innerText);
  alert("copied to clipboard");
});

window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);