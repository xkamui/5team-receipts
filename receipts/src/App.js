import './assets/styles/App.css';
import ManageReceipts from './components/manageReceipts';
import MainHeader from './components/mainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <ManageReceipts />
    </div>
  );
}

export default App;
