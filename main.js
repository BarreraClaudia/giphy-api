const img = document.querySelector('.gif');

const theOfficeURL =
  'https://api.giphy.com/v1/gifs/translate?api_key=WS8fTduxDBNQSn038pJMdV9KDMJ92HNG&s=theoffice';

async function getGif(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const gifData = await response.json();

    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

getGif(theOfficeURL);

const theOfficeButton = document.querySelector('.the-office-button');

theOfficeButton.addEventListener('click', () => {
  getGif(theOfficeURL);
});

const searchButton = document.querySelector('.search-button');

const input = document.querySelector('#search-gif');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (!input.value) {
    showInputError();
  } else {
    const firstPartURL =
      'https://api.giphy.com/v1/gifs/translate?api_key=WS8fTduxDBNQSn038pJMdV9KDMJ92HNG&s=';

    const URL = firstPartURL + input.value;

    getGif(URL);
  }
});

let inputErrorSpan = document.querySelector('.input-error');

function showInputError() {
  inputErrorSpan.textContent = 'Search cannot be empty.';
}

input.addEventListener('input', () => {
  if (input) {
    inputErrorSpan.textContent = '';
  } else {
    showInputError();
  }
});
