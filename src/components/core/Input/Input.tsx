import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  name?: string;
}

const Input = ({ onChange, value, type, name }: InputProps) => {
  return (
    <div>
      <input
        className={classes['c-input']}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
