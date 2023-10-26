export default function initFetchBitcoinApi() {

}

const btcDisplay = document.querySelector('.btc-preco');
const symbol = 'BRL';

async function fetchBtc() {
 fetch('https://blockchain.info/ticker')
  .then((response) => {
    return response.json();
  })
  .then((bitcoin) => {
    btcDisplay.innerText = (1000 / bitcoin[symbol].sell).toFixed(4);
  })
  .catch(error => {
    console.log(Error(error));
  });
}
fetchBtc();