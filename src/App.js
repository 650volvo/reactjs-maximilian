import ExpenseItem from './components/ExpenseItem';

function App() {
  const para = document.createElement('p');
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
