import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} /> {/* no exact because we are going to pass properties */}
      <footer>Coded With Love By <a className="noTextDecoration" href="https://echosit.github.io" target="_blank"><span className="footerLink">Echo</span></a>. Learn More About <a className="noTextDecoration" href="https://echosit.github.io/Lets-Chat" target="_blank"><span className="footerLink">This Project</span></a>.</footer>
    </Router>
  );
}

export default App;
