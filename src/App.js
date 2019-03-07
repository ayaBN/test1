import React, { Component } from 'react';
import {BrowserRouter as Router , Route,Switch}
 from 'react-router-dom';
import Contacts from './component/Contacts';
import Header from './component/Header';
import AddContact from './component/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';

import {provider} from '../context';
import Contact from './component/Contact';
class App extends Component {
   render() {
    return (
      <provider>
        <Router>
      <div className="App">
      <Header branding= "Contact Manager1"/>
      <div className="container">
      <switch>
        <Route exact path="/" Component =
        {Contacts}

      </switch>
      </div>
      
        
      </div>
        </Router>
      </provider>
    );
  }
}

export default App;
