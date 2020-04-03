import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ marginBottom: 0 }}>Ryan Walters</h1>
            <div>Principal Engineer @ Encyclopedia Britannica</div>
            <div className={styles.content}>
              <a href="https://github.com/ryanwalters">Github</a>
              <a href="https://covid.ryanwalters.dev">COVID-19 Data Visualizations</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
