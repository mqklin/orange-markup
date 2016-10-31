import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';
import { Header, Main, Description } from 'components';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div>
          <Description />
        </div>
      </div>
    );
  }
}

export default App;
