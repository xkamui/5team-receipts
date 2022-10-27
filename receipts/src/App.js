import React, { useState, useEffect, createContext } from "react";
import ManageReceipts from "./components/manageReceipts";
import MainHeader from "./components/mainHeader";
import "./assets/styles/App.css";

export const Context = createContext([]);

function App() {
  const [allReceipts, setAllReceipts] = useState(null);
  const fetchAllUrl =
    "https://www.marc-grondin.com/works/5team/receipts/rest-api/index.php/receipt/listAll";

  useEffect(() => {
    fetch(fetchAllUrl)
      .then((response) => response.json())
      .then((data) => setAllReceipts(data));
  }, []);

  return (
    <div className="App">
      <Context.Provider value={allReceipts}>
        <MainHeader />
        <ManageReceipts />
      </Context.Provider>
    </div>
  );
}

export default App;
