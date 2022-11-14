import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input = ({ name, onChange, value }: InputProps) => {
  return (
    <div>
      <input className={classes['c-input']} name={name} onChange={onChange} value={value}></input>
    </div>
  );
};

export default Input;
