import React, { Component } from 'react';
import './App.css';
import { Navbar,  NavbarBrand } from 'reactstrap';
import NavBar from './components/NavBar.js';
//You should checkout https://reactstrap.github.io/ if you have any other problems 😊😉
class App extends Component {
  render(){
    return (
      //You should have a component that represents the NavBar. I've created one in the components/NavBar.js file
      //
      //<NavBar/>
      <div className="App">
        <Navbar dark color="primary">
          <NavbarBrand href="/">Lorem Ipsum</NavbarBrand>
          <NavbarBrand href="/"> Sign up to see how it works.</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
export default App;