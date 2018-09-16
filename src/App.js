import React, { Component } from 'react';
import './App.css';
import Brands from './components/brands';
import Header from './components/header'

class App extends Component {

  render() {
    return (
      <div>
      <header>
          <Header/>
      </header>
      <section>    
        <article>
          <Brands/>
        </article>
      </section>
    <footer>
    <p>@zeotap Assignment</p>
    </footer>     
      </div>
    );
  }
}

export default App;

