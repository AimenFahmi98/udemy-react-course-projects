import { useState } from "react";

export default function BillSpliter({ friends, onBillSplit }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [payer, setPayer] = useState("You");

  function handleChangeYourExpense(e) {
    const expense = Number(e.target.value);

    if (isNaN(expense)) {
      alert("This field must be a number!");
      return;
    }

    if (expense > bill) alert("Your expense cannot be bigger than the bill");
    else setYourExpense(e.target.value);
  }

  const selectedFriends = friends.filter((friend) => friend.isSelected);

  if (selectedFriends.length === 0) {
    return null;
  }

  const selectedFriend = selectedFriends[0];

  function handleSplitBill() {
    if (payer === "You") {
      onBillSplit(
        selectedFriend.id,
        selectedFriend.balance - (bill - yourExpense)
      );
    } else {
      onBillSplit(
        selectedFriend.id,
        selectedFriend.balance + (bill - yourExpense)
      );
    }
  }

  return (
    <div className="bill-spliter-container">
      <h1 className="bill-spliter-title">
        Split a bill with {selectedFriend.name}
      </h1>

      <span className="form-emoji">💰</span>
      <span className="form-text">Bill value</span>
      <input
        type="text"
        className="form-input"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <span className="form-emoji">🧍‍♂️</span>
      <span className="form-text">Your expense</span>
      <input
        type="text"
        className="form-input"
        value={yourExpense}
        onChange={(e) => handleChangeYourExpense(e)}
      />

      <span className="form-emoji">👬</span>
      <span className="form-text">{selectedFriend.name}'s expense</span>
      <label className="form-input form-input-locked">
        {bill - yourExpense > 0 ? bill - yourExpense : ""}
      </label>

      <span className="form-emoji">💰</span>
      <span className="form-text">Who is paying the bill?</span>
      <select
        className="form-input"
        id="bill-spliter-select"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option>You</option>
        <option>{selectedFriend.name}</option>
      </select>
      <button className="bill-spliter-button" onClick={handleSplitBill}>
        Split bill
      </button>
    </div>
  );
}
