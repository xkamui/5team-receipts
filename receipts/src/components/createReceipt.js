import { useState } from "react";
import "../assets/styles/createReceipt.css";

function CreateReceipt(props) {
  const [validForm, setValidForm] = useState(false);
  const [receiptInfos, setReceiptInfos] = useState({
    id: "",
    title: "",
    stamp: "",
    amount: "",
    formErrors: { title: "", stamp: "", amount: "" },
    titleValid: false,
    stampValid: false,
    amountValid: false,
  });

  const handleUserInput = (e) => {
    const nextFormState = { ...receiptInfos, [e.target.name]: e.target.value };
    setReceiptInfos(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(receiptInfos, null, 2));
  };

  return (
    <form onSubmit={(e) => onSubmitForm}>
      <div
      className={props.showForm ? "createReceipt showForm" : "createReceipt"}
    >
        <div className="formCell">
          <label htmlFor="title">Receipt title</label>
          <input
            type="text"
            onChange={(e) => handleUserInput(e)}
            name="title"
            id="title"
            value={receiptInfos.title}
            required
          />
        </div>
        <div className="formCell">
          <label htmlFor="stamp">Receipt date</label>
          <input
            type="date"
            onChange={(e) => handleUserInput(e)}
            name="stamp"
            id="stamp"
            value={receiptInfos.stamp}
            required
          />
        </div>
        <div className="formCell">
          <label htmlFor="amount">Amount in euros</label>
          <input
            type="number"
            step="0.01"
            onChange={(e) => handleUserInput(e)}
            name="amount"
            id="amount"
            value={receiptInfos.amount}
            required
          />
        </div>
        <div className="formCell">
          <button disabled={!validForm ? "disabled" : ""} type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateReceipt;
