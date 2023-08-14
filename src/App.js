import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState(0);
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwo] = useState(0);

  const handleBill = (e) => {
    setBill(+e.target.value);
  };

  const handleTipOne = (e) => {
    setTipOne(+e.target.value);
  };

  const handleTipTwo = (e) => {
    setTipTwo(+e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setTipOne(0);
    setTipTwo(0);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BillInput bill={bill} onInput={handleBill} />
      <YourTip tipOne={tipOne} onTipChange={handleTipOne} />
      <FriendsTip tipTwo={tipTwo} onTipChange={handleTipTwo} />
      <Total bill={bill} tipOne={tipOne} tipTwo={tipTwo} />
      <ResetBtn onReset={handleReset}>Reset</ResetBtn>
    </div>
  );
};

const BillInput = ({ bill, onInput }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <span>How much was the bill?</span>
      <input type="number" onChange={onInput} value={bill} />
    </div>
  );
};

const YourTip = ({ tipOne, onTipChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <span>How did you like the service?</span>
      <select onChange={onTipChange} value={tipOne}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const FriendsTip = ({ tipTwo, onTipChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <span>How did your friend like the service?</span>
      <select onChange={onTipChange} value={tipTwo}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Total = ({ bill, tipOne, tipTwo }) => {
  const tip = bill * ((tipOne + tipTwo) / 2) * 0.01;
  const totalBill = bill + tip;

  return (
    <h1>
      You pay ${totalBill} ( ${bill} + ${tip} tip)
    </h1>
  );
};

const ResetBtn = ({ onReset, children }) => {
  return (
    <button
      style={{ padding: "10px 20px", fontSize: "16px" }}
      onClick={onReset}
    >
      {children}
    </button>
  );
};

export default App;
