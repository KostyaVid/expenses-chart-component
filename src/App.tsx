import React from 'react';
import './App.css';
import Container from './components/Container';
import ExpensesChart from './components/ExpensesChart';

function App() {
  return (
    <div className="App">  
      <Container>
        <ExpensesChart />
      </Container>  
    </div>
  );
}

export default App;
