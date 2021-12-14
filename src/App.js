import './App.css';
import { AddTransaction, Balance, Header, IncomeExpenses, TransactionList } from './components';
import { GLobalProvider } from './context/GlobalState';


function App() {
  return (
    <GLobalProvider>
      <div className="App">
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GLobalProvider>
  );
}

export default App;