const axios = require('axios');


const BASEURL = "https://kitsu.io/api/edge/";

const config= {
    method: 'get',
    headers: { 
      'Cookie': '__cfduid=deb4a7587093cbd4055451cd0709d2d881613857841'
    }
  };

  const getAnime = () => {
    config.method = 'get';
    config.url = `${BASEURL}/anime`; 
  return  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return JSON.stringify(response.data);
})
.catch(function (error) {
    console.log(error);  
})
  }

const searchAnime = (searchTerm) => {
    config.method = 'get';
    config.url = `${BASEURL}/anime?[text]=${searchTerm}`; 
  return  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return JSON.stringify(response.data);
})
.catch(function (error) {
    console.log(error);  
})
}

module.exports = {
   searchAnime,
   getAnime,
  };