import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Header extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={classNames(styles.el, styles.logo)}>
          <div/>
        </div>
        <a className={classNames(styles.el, styles.link)} href="#main">Главная</a>
        <a className={classNames(styles.el, styles.link)} href="#description">Описание</a>
        <a className={classNames(styles.el, styles.link)}>Полезные свойства</a>
        <a className={classNames(styles.el, styles.link)}>Ваше мнение</a>
      </div>
    );
  }
}

export default Header;
