import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import IndexBox from "./components/IndexBox";
import "./components/styles.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <IndexBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />

        <button className="swap-btn" onClick={swap}>
          Swap
        </button>

        <IndexBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={from}
          amountDisable
        />
        <button type="submit" className="covert-btn">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
