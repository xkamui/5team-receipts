import { useContext, useState } from "react";
import TotalMonth from "./totalMonth";
import "../assets/styles/listTotalMonth.css";

import { Context } from "../App";

function ListTotalMonth() {
  const [sums, setSums] = useState([]);
  const receipts = useContext(Context);

  /*
  if (receipts?.length) {
    setSums(getSums(receipts));
  }

  function getSums() {
    const sums = receipts.reduce((acc, cur) => {
      acc[cur.stamp.substring(0, 7)] =
        acc[cur.stamp.substring(0, 7)] + parseFloat(cur.amount) ||
        parseFloat(cur.amount);
      return acc;
    }, {});
    return sums;
  }
  */

  return (
    <section id="dates">
      <h2>Dates and Totals</h2>
      {(sums?.length && receipts?.length)
        ? sums.map((monthSum, index) => (
            <TotalMonth key={index} monthSum={monthSum} />
          ))
        : ""}
    </section>
  );
}

export default ListTotalMonth;
