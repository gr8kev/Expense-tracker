
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './AddTransaction';


import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'></div>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
