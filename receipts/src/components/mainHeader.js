import { useContext, useState } from "react";
import CreateReceipt from "./createReceipt";
import "../assets/styles/mainHeader.css";

import { Context } from "../App";

function MainHeader() {
  const [createForm, setCreateForm] = useState(false);
  const receipts = useContext(Context);
  const totalReceipts = receipts.allReceipts?.reduce((sum, receipt) => {
    return sum + parseFloat(receipt.amount);
  }, 0);

  const exposeAddForm = () => {
    if (!createForm) {
      setCreateForm(true)
    } else {
      setCreateForm(false)
    }
    console.log('show', createForm)
  }

  return (
    <header>
      <div className="headerWrapper">
        <div className="header-buttn">
          <button onClick={() => exposeAddForm()}>New</button>
        </div>
        <div className="header-title">
          <h1>Manage your receipts</h1>
        </div>
        <div className="header-total">
          Total :{" "}
          <span className="price-total">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(totalReceipts)}
          </span>
        </div>
      </div>
      <CreateReceipt showForm={createForm} />
    </header>
  );
}

export default MainHeader;
