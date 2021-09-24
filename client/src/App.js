import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Images from './pages/Images/Images';
import Submit from './pages/Submit/Submit';

function App() {
  return (
    <Router>
      <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/submit" component={Submit}/>
        <Route path="/img" component={Images}/>
    </Router>
  );
}

export default App;
