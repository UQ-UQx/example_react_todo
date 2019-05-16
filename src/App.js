import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo'
import AnotherComponent from './AnotherComponent';

function App() {


  return (
    <div >
      <Todo name="hello world" age={30}  />
      <AnotherComponent  />
    </div>
  );
}

export default App;
