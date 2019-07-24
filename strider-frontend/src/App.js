import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import runForm from './components/runForm'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

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
     <div className="col-md-6">
     <runForm />
     </div>
    </div>
  );
}
}

export default App;
