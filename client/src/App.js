import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// components
import Header from './components/constant/Header';
import Footer from './components/constant/Footer';

// pages
import Student from './pages/Student';
import Landing from './pages/Landing';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Companies from './pages/Companies';

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        <Switch>
          {/* Navigation */}
          <Route exact path='/' component={Landing} />
          <Route path='/students' component={Student} />
          <Route path='/faculty' component={Faculty} />
          <Route path='/contact' component={Contact} />
          <Route path='/companies' component={Companies} />
        </Switch>
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
