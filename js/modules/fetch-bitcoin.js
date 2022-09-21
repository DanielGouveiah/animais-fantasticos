export default function FetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcDiv = document.querySelector(target);
      const btcValor = bitcoin.BRL.sell;
      btcDiv.innerText = (1000 / btcValor).toFixed(3);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
