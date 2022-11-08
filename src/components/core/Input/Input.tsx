import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  name: string;
  action(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input className={classes['c-input']} name={props.name} onChange={props.action}></input>
    </div>
  );
};

export default Input;
