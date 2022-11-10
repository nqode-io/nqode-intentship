import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  name: string;
  clickHandler?: () => void;
  type: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ name, clickHandler, type }) => {
  return (
    <button
      className={
        type === 'secondary'
          ? `${classes['c-button']} ${classes['c-button--secondary']}`
          : type === 'danger'
          ? `${classes['c-button']} ${classes['c-button--danger']}`
          : classes['c-button']
      }
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default Button;
