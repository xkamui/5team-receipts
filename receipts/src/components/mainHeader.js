import { useContext } from "react";
import "../assets/styles/mainHeader.css";

import { Context } from "../App";

function MainHeader() {
  const receipts = useContext(Context);
  const totalReceipts = receipts?.reduce((sum, receipt) => {
    return sum + parseFloat(receipt.amount)
  }, 0)
  console.log(totalReceipts)

  return (
    <header>
      <div className="header-buttn">
        <button>New</button>
      </div>
      <div className="header-title">
        <h1>Manage your receipts</h1>
      </div>
      <div className="header-total">
        Total : <span className="price-total">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalReceipts)}</span>
      </div>
    </header>
  );
}

export default MainHeader;
