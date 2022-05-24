import axios from 'axios';

function toDataURL(url, callback) {
  return axios.get(url)
    .then((data) => {
      return data.data;
    });
}

toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
  .then(dataURL => {
    console.log('RESULT:', dataURL)
  });