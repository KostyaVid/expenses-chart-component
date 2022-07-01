import React, { useState } from 'react'
import { IDay } from '../Graf';
import s from './Column.module.css';

interface IColumn{
   dayColumn:IDay;
   maxHeight: number;
}

const Column = ({dayColumn, maxHeight}:IColumn) => {
   const [hover, setHover] = useState(false);
   function setStateHoverEnter(){
      setHover(true);
   }
   function setStateHoverLeave(){
      setHover(false);
   }

   const [focus, setFocus] = useState(false);
   function setStateFocus(){
      setFocus(!focus);
   }

  return (
      <div className={s.column}>
         <div className={s.figure}
            style={{height: `${155 * dayColumn.amount/maxHeight}px`, backgroundColor: `${focus?'hsl(186, 34%, 60%)':'hsl(10, 79%, 65%)'}`}}
            onMouseEnter = {setStateHoverEnter}
            onMouseLeave ={setStateHoverLeave}
            onClick = {setStateFocus}
         ></div>
         <div className={s.text}>{dayColumn.day}</div>
         {(hover||focus)&&<div className={s.popup}>{dayColumn.amount}</div>}
      </div>
  )
}

export default Column