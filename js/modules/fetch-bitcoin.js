export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcDiv = document.querySelector(".btc-preco");
      const btcValor = bitcoin.BRL.sell;
      btcDiv.innerText = (1000 / btcValor).toFixed(3);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
