import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './contexts/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Header></Header>
    <div className="container">
      <Balance></Balance>
      <IncomeExpences></IncomeExpences>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
