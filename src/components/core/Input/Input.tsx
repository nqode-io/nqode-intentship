import React from 'react';
import classes from 'Input.module.scss';

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, onChange }: InputProps) => {
  return (
    <div>
      <input className={classes['c-input']} name={name} onChange={onChange}></input>
    </div>
  );
};

export default Input;
