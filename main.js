const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

function generateNewQuote() {
    fetch('https://quotes-api-self.vercel.app/quote')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.quote;
            quoteAuthor.textContent = `- ${data.author}`;
        })
        .catch(() => alert('Couldn\'t fetch quote'));
}

window.addEventListener('DOMContentLoaded', generateNewQuote);