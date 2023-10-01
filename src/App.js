import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses';
import Heading from './Components/Heading';
import Card from './UI/Card';
import AddExpense from './Components/AddExpense';


function App() {
  return (
    <>

      <Heading />
      <Card>
        <AddExpense />
      </Card>
      <Card>
        <Expenses />
      </Card>
    </>
  );
}

export default App;
