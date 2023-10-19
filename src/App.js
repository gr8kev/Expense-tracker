
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className='container'></div>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction/>
    </div>
  );
}

export default App;
