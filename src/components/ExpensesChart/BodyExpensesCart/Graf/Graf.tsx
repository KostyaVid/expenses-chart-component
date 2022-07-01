import React, {useEffect, useState} from 'react';
import Column from './Column';

import s from './Graf.module.css';

export interface IDay{
   day:string;
   amount:number;
}

const Graf = () => {
   const [dataGraf, setDataGraf] = useState<Array<IDay>>([]);
   const [maxHeight, setMaxHeight] = useState(0);

   useEffect(()=>{
         fetch('data.json').then(res=>res.json()).then((data:Array<IDay>)=>{
            setMaxHeight(data.reduce((prev, curr)=>{
               return curr.amount>prev?curr.amount:prev;
            }, 0))
            
            setDataGraf(data);
         });
   },[]);

  return (
    <div className={s.containerBody}>
      {dataGraf.map(elem=>{
         return (
            <Column dayColumn={elem} maxHeight = {maxHeight} key = {elem.day}/>
         )
      })}
    </div>
  )
}

export default Graf