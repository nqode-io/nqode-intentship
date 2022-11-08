import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  content: string;
  action(): void;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={classes['c-button']} onClick={props.action}>
      {props.content}
    </button>
  );
};

export default Button;
