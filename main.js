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

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const firstPartURL =
    'https://api.giphy.com/v1/gifs/translate?api_key=WS8fTduxDBNQSn038pJMdV9KDMJ92HNG&s=';

  const input = document.querySelector('#search-gif').value;

  const URL = firstPartURL + input;

  getGif(URL);
});
