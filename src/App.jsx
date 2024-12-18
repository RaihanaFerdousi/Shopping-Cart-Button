import "./App.css";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(35);
  const [animationClass, setAnimationClass] = useState("");
  const [clickedButton, setClickedButton] = useState(null);

  const handleIncrement = () => {
    setAnimationClass("animate-from-right");
    setClickedButton("increment");
    setQuantity(quantity + 1);
    setPrice(price + 35);
    resetStates();
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setAnimationClass("animate-from-left");
      setClickedButton("decrement");
      setQuantity(quantity - 1);
      setPrice(price - 35);
      resetStates();
    }
  };

  const resetStates = () => {
    setTimeout(() => {
      setAnimationClass("");
      setClickedButton(null);
    }, 80);
  };

  return (
    <>
      <div className="flex items-center bg-[#3C4247] gap-10 text-center justify-center h-screen">
        <div className="flex gap-5 items-center">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className={`text-6xl ${
              quantity <= 1
                ? "text-gray-500 cursor-not-allowed"
                : clickedButton === "decrement"
                ? "text-[#00F5C3]"
                : "text-white"
            }`}
          >
            <AiOutlineMinus />
          </button>
          <h2
            className="text-5xl text-white bg-[#32373c] py-5 px-8 rounded-xl"
            style={{
              boxShadow: "inset 0 4px 8px -2px #1f2226",
            }}
          >
            <span className={animationClass}>{quantity}</span>
          </h2>
          <button
            onClick={handleIncrement}
            className={`text-6xl font-thin ${
              clickedButton === "increment" ? "text-[#00F5C3]" : "text-white"
            }`}
          >
            <GoPlus />
          </button>
        </div>
        <div>
          <button
            className="flex text-5xl bg-[#00F5C3] text-[#3C4247] gap-3 px-6 py-5 rounded-lg"
            style={{
              boxShadow: "0 0 15px 5px rgba(0, 245, 195, 0.6)",
            }}
          >
            <PiShoppingCartSimpleFill className="text-[#01D6A9]" />${price}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
