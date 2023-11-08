import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount, setAmount] = useState("")
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")
  const currencyInfo = useCurrencyInfo(currencyFrom);

  const currencyOptions = Object.keys(currencyInfo)

  const swap = ()=>{
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[currencyTo])
  }
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://blogs.worldbank.org/sites/default/files/styles/hero/public/2023-05/hero_1140x500_exchange_rates.jpg.webp?itok=9cgVtzMU')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-orange-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(currency) => {
                              setAmount(currency)
                            }}
                            selectCurrency={currencyFrom}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                             ↓ ↑ 
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(currency) => {
                              setCurrencyTo(currency)
                            }}
                            selectCurrency={currencyTo}
                            onAmountChange={(amount) => setConvertedAmount(amount)} />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert  ${currencyFrom.toUpperCase()}  to  ${currencyTo.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;
