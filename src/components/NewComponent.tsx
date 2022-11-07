import React from 'react';
import classes from './NewComponent.module.scss';

const NewComponent = () => {
    return (
      <div>
        <button className={`${classes['c-newComponent__button--toRed']} ${classes['c-newComponent__button']}`}>
            Button hover red
        </button>
        <button className={`${classes['c-newComponent__button--toGreen']} ${classes['c-newComponent__button']}`}>
            Button hover green
        </button>
      </div>
    );
  };
  
  export default NewComponent;