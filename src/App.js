import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ marginBottom: 0 }}>Ryan Walters</h1>
            <div>Principal Engineer @ Encyclopedia Britannica</div>
            {/*<small>
              <a href="https://github.com/ryanwalters">Github</a>
            </small>*/}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
