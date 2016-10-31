import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Description extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.background}>
          <div className={styles.background_inner}>
            &nbsp;
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>&nbsp;</div>
          <div className={styles.all_about}>
            Вся правда об
          </div>
          <div className={styles.oranges}>
            Апельсинах
          </div>
          <div className={styles.description}>
            <div className={styles.el}>
              Польза, вред, полезные свойства и
            </div>
            <div className={styles.el}>
              противопоказания
            </div>
          </div>
          <div className={styles.separator}>&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default Description;
