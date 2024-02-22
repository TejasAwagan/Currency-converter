// import IndexBox from "./components/IndexBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import IndexBox from "./components/IndexBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
        }}>

        <IndexBox
        label= "from"
        amount = {amount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setAmount(currency)}
        selectCurrency={from}
        amountDisable
        />
        <IndexBox
        label= "to"
        amount = {convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setTo(currency)}
        selectCurrency={from}
        amountDisable
        />
      </form>
    </div>
  );
}

export default App;
