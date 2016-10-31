import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Header extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.el}>
          <div className={styles.logo}/>
        </div>
        <div className={styles.el}>Главная</div>
        <div className={styles.el}>Описание</div>
        <div className={styles.el}>Полезные свойства</div>
        <div className={styles.el}>Ваше мнение</div>
      </div>
    );
  }
}

export default Header;
