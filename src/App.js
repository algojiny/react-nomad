import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [haveMoney, setHaveMoney] = useState(0);
  const [rate, setRate] = useState(0);
  const onInputChange = (inputData) => {
    const userInput = inputData.target.value;
    setHaveMoney(userInput);
  };
  const onChange = (obj) => {
    setRate(obj.target.value);
  };
  console.log(haveMoney);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  console.log(coins);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <input type="number" onChange={onInputChange}></input>
            <span>{haveMoney / Math.round(+rate)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
