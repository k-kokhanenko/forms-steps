import '../../css/bulma.css'

import { useState } from 'react';
import { StepForm } from '../StepForm/StepForm';
import { StepsViewer } from '../StepsViewer/StepsViewer';


export const Steps = () => {
    const [items, setItems] = useState([]);

    const handleUpdate = (date, distance) => {
        let newItems = Object.assign([], items);

        let update = false;
        newItems.map(function(item) {
            if (item.date == date) {
                update = true;
                item.distance = Number(item.distance) + Number(distance);
            }
        });

        if (!update) {
            newItems.push({
                date : date,
                distance : distance
            })
        }
        
        setItems(newItems);        
    }

    const handleDelete = (event) => {
        const date = event.target.dataset.date;
        let newItems = items.filter(item => item.date !== date);
        setItems(newItems);                
    }

    return (
        <>
            <StepForm handle={handleUpdate}/>
            <StepsViewer items={items} handle={handleDelete}/>
        </>
    )
}
