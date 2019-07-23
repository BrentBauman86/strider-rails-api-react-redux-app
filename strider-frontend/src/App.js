import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Run from './components/Run.js'

class App extends React.Component{
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/users/1')
  //   .then(r=>r.json())
  //   .then(console.log)
  // }
  render() {
  return (
    <div>
     <Login />
    </div>
  );
}
}

export default App;
