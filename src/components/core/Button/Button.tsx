import React from 'react'
import classes from './Button.module.scss'

interface ButtonProps{
    name: string
    clickHandler: () => void;
}

const Button = ({name, clickHandler} : ButtonProps) => {
  return (
    <button className={classes['c-button']} onClick={clickHandler}>{name}</button>
  )
}

export default Button
