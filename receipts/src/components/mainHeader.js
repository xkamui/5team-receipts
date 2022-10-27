import "../assets/styles/mainHeader.css";

function MainHeader() {
  return (
    <header>
      <div className="header-buttn">
        <button>New</button>
      </div>
      <div className="header-title">
        <h1>Manage your receipts</h1>
      </div>
      <div className="header-total">
        Total : <span className="price-total">3.255,00 €</span>
      </div>
    </header>
  );
}

export default MainHeader;
