import React from 'react';
import Todo from './components/Todo';
import TestFormSubmit from './components/TestFormSubmit';

function App() {


  return (
    <div className="App">
      <h1>Hola React-Hooks</h1>
      <Todo />
      <hr />
      <h1>Submit form with hooks</h1>
      <TestFormSubmit />
    </div>
  );
}

export default App;
