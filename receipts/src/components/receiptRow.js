import "../assets/styles/listReceipts.css";
import ListActions from "./listActions";

function ReceiptRow(receipt) {
  return (
    <tr>
      <td className="date-receipt">{receipt.receipt.stamp}</td>
      <td>{receipt.receipt.title}</td>
      <td className="amnt-receipt">{receipt.receipt.amount} €</td>
      <td className="acts-receipt">
        <ListActions uid={receipt.receipt.id} />
      </td>
    </tr>
  );
}

export default ReceiptRow;
