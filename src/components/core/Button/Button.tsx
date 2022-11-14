import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  content: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button className={classes['c-button']} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
