// import { cryptoAssets, cryptoData } from "./data";
// import { useState } from "react";
import { cryptoAssets } from "./data";

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 2);
  });
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2);
  });
}

export function fetchCrypto() {
  return new Promise((resolve) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': '311/uyijKOGN7FCwfvIOUGH1h+I42RwS1b3I9eBbA3c='
      }
    };
    // const [cryptoData, setCryptoData] = useState([]);
    fetch('https://openapiv1.coinstats.app/coins?page=1&limit=50', options) //page=1, limit=50
      .then(res => res.json())
      // .then(res => resolve(res))
      .then(res => {
        resolve(res);
        console.log(res);
      })
      .catch(err => console.error(err));
  });
}


/*

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '311/uyijKOGN7FCwfvIOUGH1h+I42RwS1b3I9eBbA3c='
  }
};

fetch('https://openapiv1.coinstats.app/coins', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

*/
