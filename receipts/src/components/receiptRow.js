import "../assets/styles/listReceipts.css";
import ListActions from "./listActions";

function ReceiptRow(receipt) {
  return (
    <tr>
      <td className="date-receipt">{receipt.receipt.stamp}</td>
      <td>{receipt.receipt.title}</td>
      <td className="amnt-receipt">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(receipt.receipt.amount)}</td>
      <td className="acts-receipt">
        <ListActions uid={receipt.receipt.id} />
      </td>
    </tr>
  );
}

export default ReceiptRow;
