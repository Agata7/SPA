import React, {Component} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Page from './Page';
import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'

import '../style/App.css';

class App extends Component {

  render(){
  return (
    <Router>
    <div className="app">
  <header>{<Header/>}</header>
  <main>
    <aside className="navi">
      {<Navigation/>}
    </aside>
    <section className="page">
      {<Page/>}
    </section>
  </main>
  <footer>{<Footer/>}</footer>
    </div>
    </Router>
  );
}
}
export default App;
