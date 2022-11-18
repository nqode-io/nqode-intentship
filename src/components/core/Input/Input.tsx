import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  label?: string;
  value?: string | number;
  setValue: (value: string) => void;
  readonly?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  name,
  label,
  setValue,
  value,
  readonly
}) => {
  return (
    <div className={classes['c-input']}>
      {label ? (
        <label className={classes['c-input__label']} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={classes['c-input__input-field']}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        readOnly={readonly}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default Input;
