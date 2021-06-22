import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <>
    <Head>
      <title>Ryan Walters &ndash; Nerd</title>
    </Head>
    <div className={styles.App}>
      <header className={styles.header}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ marginBottom: 0 }}>Ryan Walters</h1>
          <div>Engineering Manager @ Encyclopedia Britannica</div>
          <div className={styles.content}>
            <a href="https://github.com/ryanwalters">Github</a>
            <a href="https://www.linkedin.com/in/ryanpwalters/">LinkedIn</a>
          </div>
        </div>
      </header>
    </div>
  </>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
