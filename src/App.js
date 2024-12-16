import { useState } from "react";

export default function App() {
  return (
    <div>
      <InputBill></InputBill>
      <InputService>How did you like the service?</InputService>
      <InputService>How did your friend like the service?</InputService>
    </div>
  );
}

function InputBill() {
  const [bill, setBill] = useState("");

  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </div>
  );
}

function InputService({ children }) {
  const [selectedTip, setSelectedTip] = useState("");

  const tipArray = [0, 5, 10, 20];

  function handleChange(e) {
    setSelectedTip(e.target.value);
  }

  return (
    <div>
      <p>{children}</p>
      <select value={selectedTip} onChange={handleChange}>
        {tipArray.map((tip, i) => (
          <option key={i}>Dissatisfied ({tip}%)</option>
        ))}
      </select>
    </div>
  );
}

{
  /* <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option> */
}
