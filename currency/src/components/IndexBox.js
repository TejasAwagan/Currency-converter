import React,{useId} from "react";
import "./styles.css";

function IndexBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false
}) {

  const amountInputId = useId();

  return (
    <div>
      <div className="container">
        <div className="labels">
          <label htmlFor={amountInputId}>{label}</label>
          <label>Currency Type</label>
        </div>

        <div className="inputs">
          <input type="number" placeholder="Amount" value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />

          <select className="option-items" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            {currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      
    </div>
  );
}

export default IndexBox;
