const resContainer = document.getElementById("Response_Container");
const quoteButton = document.getElementById("Random_Quote");

let quotesArray = [];
let currentIndex = 0;

async function getQuotes() {
  const response = await fetch(
    "https://week08-assignment-monorepo-server.onrender.com/quotes"
  );
  quotesArray = await response.json();
  resContainer.innerHTML = quotesArray[0].h;
}

getQuotes();

quoteButton.addEventListener("click", function () {
  const quote = quotesArray[currentIndex];
  resContainer.innerHTML = quote.h;

  currentIndex++;
  if (currentIndex >= quotesArray.length) {
    currentIndex = 0;
  }
});
