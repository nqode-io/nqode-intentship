import React from 'react'
import classes from './Input.module.scss'

interface InputProps {
    type: string,
    placeholder: string,
    id: string,
    name: string,
    label: string,
    setValue: (value: string) => void
}

const Input = ({type, placeholder, id, name, label, setValue} : InputProps) => {
  return (
    <div className={classes['c-input']}>
        <label className={classes['c-input__label']} htmlFor={id}>{label}</label>
        <input className={classes['c-input__input-field']} type={type} placeholder={placeholder} id={id} name={name} 
          onChange={event => setValue(event.target.value)}/>
    </div>
  )
}

export default Input
