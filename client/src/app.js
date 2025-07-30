const resContainer = document.getElementById("Response_Container");
const quoteButton = document.getElementById("Random_Quote");

async function getQuotes() {
  const response = await fetch(
    "https://week08-assignment-monorepo-server.onrender.com"
  );
}
quoteButton.addEventListener("click", getQuotes);
