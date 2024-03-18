import '../../css/bulma.css'

import { useState } from 'react';
import { StepForm } from '../StepForm/StepForm';
import { StepsViewer } from '../StepsViewer/StepsViewer';


export const Steps = () => {
    const [items, setItems] = useState({});

    const handle = (date, distance) => {
        let currentItems = items;
        currentItems[date] === undefined ? 
            currentItems[date] = Number(distance) : 
            currentItems[date] += Number(distance);
        
        setItems(...currentItems); 
    }

    return (
    <>
        <StepForm handle={handle}/>
        <StepsViewer items={items}/>
    </>
  )
}
