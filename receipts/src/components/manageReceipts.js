import ListReceipts from "./listReceipts";
import ListTotalMonth from "./listTotalMonth";
import "../assets/styles/manageReceipts.css";

function ManageReceipts() {
  return (
    <section id="receipts-content">
      <ListReceipts />
      <ListTotalMonth />
    </section>
  );
}

export default ManageReceipts;
