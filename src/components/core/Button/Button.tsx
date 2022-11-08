import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  content: string;
  action: () => void;
}
const Button: React.FC<ButtonProps> = ({ content, action }) => {
  return (
    <button className={classes['c-button']} onClick={action}>
      {content}
    </button>
  );
};

export default Button;
