import { useContext } from "react";
import ReceiptRow from "./receiptRow";
import "../assets/styles/listReceipts.css";

import { Context } from "../App";

function ListReceipts() {
  const receipts = useContext(Context);

  return (
    <section id="receipts">
      <h2>Listing of your receipts</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Receipt title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {receipts.allReceipts?.length
            ? receipts.allReceipts.map((receipt) => (
                <ReceiptRow key={receipt.id} receipt={receipt} />
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
}

export default ListReceipts;
