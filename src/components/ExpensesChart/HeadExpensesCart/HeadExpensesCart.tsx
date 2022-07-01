import React from 'react';
import s from './HeadExpensesCart.module.css';

const HeadExpensesCart = () => {
  return (
    <div className={s.headCart}>
      <div>
         <div className={s.title}>My balance</div>
         <div className={s.sumBalance}>$921.48</div>
      </div>
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="40" cy="20" r="20" fill="#382314"/>
         <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
         </svg>
    </div>
  )
}

export default HeadExpensesCart;