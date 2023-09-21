import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cards() {

  const [dateArray, setDateArray] = useState([]);

  // useEffect(() => {
    const today =()=> {

    const currentDate = new Date();
    const dates = [];

    for (let i = 1; i <= 15; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      const formattedDate = nextDate.toISOString().split('T')[0];
      dates.push(formattedDate);
    }
     return setDateArray(dates);
  };
  console.log(dateArray)
  today();
// },[]);

 return (
    <>
    {dateArray.map((date, i) => (
      <Card key={i} data={dateArray} />
      ))}
    </>
  )
}

export default Cards