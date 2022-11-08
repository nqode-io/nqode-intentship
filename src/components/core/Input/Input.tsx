import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  name: string;
  action: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, action }: InputProps) => {
  return (
    <div>
      <input className={classes['c-input']} name={name} onChange={action}></input>
    </div>
  );
};

export default Input;
