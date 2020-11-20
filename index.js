console.log(`It's Working !!!`);

// for effects
AOS.init();

const API_KEY = 'at_pOcNiOF4d3DcBQwrnEe3SR2sNenG3';
// const DEFAULT_IP = '216.58.201.131';
// const URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${IP}`;

const dataIp = document.querySelector('#data-ip');
const dataLocReg = document.querySelector('#data-loc-reg');
const dataTimeZone = document.querySelector('#data-timezone');
const dataIsp = document.querySelector('#data-isp');
const buttonSubmit = document.querySelector('#send');

const inputIP = document.querySelector('#text-input');

const fetchUrl = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.ip) {
        dataIp.textContent = data.ip;
        dataLocReg.textContent = `${data.location.region} ${data.location.postalCode}`;
        dataTimeZone.textContent = data.location.timezone;
        dataISP = dataIsp.textContent = data.isp;

        if (dataISP.length > 15) {
          dataIsp.style.fontSize = '16px';
        }
      } else {
        document
          .querySelector('#text-error')
          .classList.replace('none', 'block');
        dataIp.textContent = '';
        dataLocReg.textContent = '';
        dataTimeZone.textContent = '';
        dataIsp.textContent = '';
      }

      if (data.ip === undefined) {
        inputIP.value = '';
      } else {
        inputIP.value = data.ip;
        document
          .querySelector('#text-error')
          .classList.replace('block', 'none');
      }
    });
};

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  // defaultIP = '8.8.8.8';

  if (inputIP.value === null) {
    URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${defaultIP}`;

    fetchUrl();
  } else {
    ipAdress = inputIP.value;
    URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAdress}`;

    fetchUrl();
  }
});

window.addEventListener('load', buttonSubmit.click());

// MAP CARTE
mapboxgl.accessToken =
  'pk.eyJ1IjoibWpkaW9wMTAiLCJhIjoiY2tobmM2c3J6MHBjYTMxcm5kaGM1anAxciJ9.47xvhDL_Q8h8F826PqFTWw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
