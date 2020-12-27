import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/contactState';
import './App.css'

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
