import React from 'react';
import Input from '../Input/Input';
import classes from './InputContainer.module.scss';

interface InputContainerProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  label: string;
}

const InputContainer = ({ onChange, value, label, type }: InputContainerProps) => {
  return (
    <div className={classes['c-input-container']}>
      <label className={classes['c-input-container__input-label']}>{label}</label>
      <Input onChange={onChange} value={value} type={type} />
    </div>
  );
};

export default InputContainer;
