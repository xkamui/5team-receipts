import '../assets/styles/manageReceipts.css'
import ListReceipts from './listReceipts';
import ListTotalMonth from './listTotalMonth';

function ManageReceipts(){

    return (
        <section id="receipts-content">
            <ListReceipts />
            <ListTotalMonth />
        </section>
    );

}

export default ManageReceipts;