import { useContext, useState } from "react";
import "../assets/styles/listActions.css";

import { Context } from "../App";

function ListActions(uid) {

  const receipts = useContext(Context);

  function confirmDelete(uid){
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this receipt?')) {
      console.log('go delete ' + uid)
      const fetchAllUrl =
      "https://www.marc-grondin.com/works/5team/receipts/rest-api/index.php/receipt/deleteReceipt?uid=" + uid;
  
      fetch(fetchAllUrl)
        .then((response) => response.json())
        .then((data) => receipts(data));
    }
  }


  return (
    <div className="actions">
      <button>[edit ({uid.uid})]</button>
      <button onClick={() => confirmDelete(uid.uid)}>[del. ({uid.uid})]</button>
    </div>
  );
}

export default ListActions;
