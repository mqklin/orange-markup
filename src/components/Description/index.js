import React, { Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

class Features extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.caption}>
          Описание и состав апельсина
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.header}>Апельсин</div>
            <div className={styles.description}>
              Миллионы людей по всему миру начинают свое утро с апельсина или апельсинового сока, ведь он является вкусным и одним из самых полезных фруктов среди цитрусовых. Апельсины широко используются в кулинарии, косметологии и медицине.  Апельсины как целебное средство использовали еще в древности. Помимо пользы для здоровья апельсины могут принести и вред, потому что имеют противопоказания к употреблению. О полезных свойствах и противопоказаниях мы сегодня и поговорим.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.header}>Описание апельсина</div>
            <div className={styles.description}>
              Растение апельсин – это вечнозеленое дерево подсемейства Цитрусовые семейства Рутовые. Апельсин в переводе означает «китайское яблоко». Именно из Китая берет свое происхождение апельсин. В диком виде апельсин не встречается и по предположению некоторых специалистов является гибридом мандарина и помело.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.header}>Состав апельсина</div>
            <div className={styles.description}>
              Апельсины богаты полезными веществами и витаминами. В состав апельсинов входят витамины А, группы В, С, D и Р, а также железо, медь, калий, кальций, натрий, магний, фосфор, фтор, марганец и другие вещества, помогающие человеку сохранить и укрепить свое здоровье. Именно благодаря своему превосходному составу апельсины обладают широким набором полезных свойств.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
