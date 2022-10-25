import '../assets/styles/listReceipts.css'
import ListActions from './listActions';

function ListReceipts(){

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
                    <tr>
                        <td className="date-receipt">2022-08-04</td>
                        <td>Business</td>
                        <td className="amnt-receipt">693.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-08-05</td>
                        <td>Car</td>
                        <td className="amnt-receipt">779.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-08-06</td>
                        <td>Cash Payment</td>
                        <td className="amnt-receipt">517.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-08-19</td>
                        <td>Cleaning</td>
                        <td className="amnt-receipt">805.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-08-20</td>
                        <td>Delivery</td>
                        <td className="amnt-receipt">672.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-08-29</td>
                        <td>Deposit</td>
                        <td className="amnt-receipt">605.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-03</td>
                        <td>Donation</td>
                        <td className="amnt-receipt">605.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-07</td>
                        <td>Earnest Money</td>
                        <td className="amnt-receipt">505.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-11</td>
                        <td>Event Payment</td>
                        <td className="amnt-receipt">299.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-16</td>
                        <td>Hotel</td>
                        <td className="amnt-receipt">764.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-22</td>
                        <td>Itemized</td>
                        <td className="amnt-receipt">705.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-27</td>
                        <td>Medical Bill</td>
                        <td className="amnt-receipt">469.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-09-28</td>
                        <td>Rent</td>
                        <td className="amnt-receipt">497.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-10-17</td>
                        <td>Sales</td>
                        <td className="amnt-receipt">361.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                    <tr>
                        <td className="date-receipt">2022-10-18</td>
                        <td>Security Deposit</td>
                        <td className="amnt-receipt">598.00 €</td>
                        <td className="acts-receipt"><ListActions /></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );

}

export default ListReceipts;