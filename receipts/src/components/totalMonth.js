import "../assets/styles/totalMonth.css";

function TotalMonth(monthSum) {

  console.log(monthSum)
  
  const stampDate = monthSum.split('-');
  const stringDate = new Date(stampDate[0], stampDate[1], 1);

  return (
    <div className="total-month">
      <div className="month-name">{stringDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</div>
      <div className="month-totl">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(monthSum.amount)}</div>
    </div>
  );
}

export default TotalMonth;
