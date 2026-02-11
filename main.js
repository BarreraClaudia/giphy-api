const img = document.querySelector('.gif');

const theOfficeURL =
  'https://api.giphy.com/v1/gifs/translate?api_key=WS8fTduxDBNQSn038pJMdV9KDMJ92HNG&s=theoffice';

function getGif(url) {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(`ERROR: ${e}`);
    });
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
