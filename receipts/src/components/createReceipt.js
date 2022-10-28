import { useState } from "react";
import "../assets/styles/createReceipt.css";

function CreateReceipt(props) {
  const [validForm, setValidForm] = useState(false);

  const insertReceipt = () => {
    console.log('insert valid', validForm)
  }
  
  const checkInput = () => {
    console.log(this)
  }

  return (
    <div
      className={props.showForm ? "createReceipt showForm" : "createReceipt"}
    >
      <div className="formCell">
        <label htmlFor="title">Receipt title</label>
        <input type="text" onBlur={() => checkInput(this)} name="title" id="title" required />
      </div>
      <div className="formCell">
        <label htmlFor="stamp">Receipt date</label>
        <input type="date" onBlur={() => checkInput(this)} name="stamp" id="stamp" required />
      </div>
      <div className="formCell">
        <label htmlFor="amount">Amount in euros</label>
        <input type="number" step="0.01" onBlur={() => checkInput(this)} name="amount" id="amount" required />
      </div>
      <div className="formCell">
        <button disabled={!validForm ? 'disabled' : ''} onClick={() => insertReceipt()}>Add</button>
      </div>
    </div>
  );
}

export default CreateReceipt;
