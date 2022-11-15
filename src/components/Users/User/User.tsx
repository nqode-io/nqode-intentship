import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import React from 'react';
import classes from './User.module.scss';

const User: React.FC = () => {
  return (
    <div className={classes['c-user']}>
      <div className={classes['c-user__short-info']}>
        <div>444</div>
        <div>username</div>
        <div>065-544-544</div>
      </div>
      <div className={classes['c-user__all-details']}>
        <div className={classes['c-user__input-holder']}>
          <Input
            type={'text'}
            placeholder={'first name'}
            id={'firstName'}
            name={'firstName'}
            setValue={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Input
            type={'text'}
            placeholder={'last name'}
            id={'lastName'}
            name={'lastName'}
            setValue={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className={classes['c-user__input-holder']}>
          <Input
            type={'text'}
            placeholder={'email'}
            id={'email'}
            name={'email'}
            setValue={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Input
            type={'text'}
            placeholder={'phone number'}
            id={'phoneNumber'}
            name={'phoneNumber'}
            setValue={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className={classes['c-user__input-holder']}>
          <div className={classes['c-user__last']}>
            <Input
              type={'address'}
              placeholder={'address'}
              id={'address'}
              name={'address'}
              setValue={function (value: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
          <div>
            <Button
              name={'Edit'}
              clickHandler={function (): void {
                throw new Error('Function not implemented.');
              }}
              type={'secondary'}
            />
            <Button
              name={'Delete'}
              clickHandler={function (): void {
                throw new Error('Function not implemented.');
              }}
              type={'danger'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
