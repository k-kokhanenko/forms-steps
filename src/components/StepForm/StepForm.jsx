import '../../css/bulma.css'

import { useState } from 'react';

export const StepForm = (props) => {
    const { handle } = props;

    const [form, setForm] = useState({
        date : '',
        dateValid : false,
        distance: '',
        distanceValid: false
    });

    const handleOnChange = ({target}) => {
        const { name, value } = target;

        if (name === 'date') {
            const regex = /^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[1,2]).\d{2}$/;
            const dateValid = (regex.test(value));

            setForm (data=> ({
                ...data, 
                date : dateValid ? value : '',
                dateValid : dateValid, 
            }));                
        }

        let distanceValid = form.distanceValid;
        if (name === 'distance') {
            const regex = /^[1-9]\d*$/;
            const distanceValid = (regex.test(value));

            setForm (data=> ({
                ...data, 
                distance : distanceValid ? value : '',
                distanceValid : distanceValid, 
            }));                
        }
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        
        const message = document.querySelector('.message');
        if (form.dateValid && form.distanceValid) {
            message.classList.add('is-hidden');
            
            handle(form.date, form.distance);
        } else {            
            message.classList.remove('is-hidden');
        }
    }

    return (
    <>
        <form className="box" onSubmit={handleOnSubmit}>
            <div className="field">
                <label className="label">Дата (ДД.ММ.ГГ)</label>
                <div className="control">
                    <input className="input" type="text" name="date" placeholder="Дата (ДД.ММ.ГГ)" onChange={handleOnChange}/>
                </div>
                {form.dateValid ?
                    <p className="help is-success">Корректная дата</p> : 
                    <p className="help is-danger">Некорректный формат</p>
                }                
            </div>
            <div className="field">
                <label className="label">Пройдено км</label>
                <div className="control">
                    <input className="input" type="text" name="distance" placeholder="Пройдено км" onChange={handleOnChange}/>
                </div>
                {form.distanceValid ?
                    <p className="help is-success">Корректное расстояние</p> : 
                    <p className="help is-danger">Некорректное значение</p>
                }                  
            </div>
            <button className="button is-primary">Сохранить</button>      
            <article className="mt-2 message is-danger is-hidden">
                <div className="message-body">
                    Ошибка, введены некорректные данные
                </div>
            </article>
        </form>      
    </>
  )
}
