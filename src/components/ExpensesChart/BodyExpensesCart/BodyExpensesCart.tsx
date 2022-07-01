import React from 'react';
import s from './BodyExpensesCart.module.css';
import Graf from './Graf';

const BodyExpensesCart = () => {
  return (
    <div className={s.bodyCard}>
      <div className={s.title}>Spending - Last 7 days</div>
      <Graf />
      <div className={s.line}></div>
      <div className={s.footerCard}>
         <div>
            <div className={s.totalTitle}>Total this month</div>
            <div className={s.price}>$478.33</div>
         </div>
         <div>
            <div className={s.percent}>+2.4%</div>
            <div className={s.totalTitle}>from last month</div>
         </div>
      </div>
    </div>
  )
}

export default BodyExpensesCart