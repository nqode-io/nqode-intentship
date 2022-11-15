import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
}

const Input = ({ onChange, value, type }: InputProps) => {
  return (
    <div>
      <input className={classes['c-input']} onChange={onChange} value={value} type={type} />
    </div>
  );
};

export default Input;
