import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  name: string;
  clickHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, clickHandler }) => {
  return (
    <button className={classes['c-button']} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default Button;
