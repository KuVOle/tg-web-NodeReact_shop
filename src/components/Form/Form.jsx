import React, { useEffect, useState } from 'react';
import './Form.css';
import { useTelegramm } from '../../hooks/useTelegramm';


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physiacal');

    const { tgApp } = useTelegramm();

    // eslint-disable-next-line
    useEffect(() => { tgApp.MainButton.setParams({ text: 'Отправить данные', }) }, []);

    useEffect(() => {
        if (!street || !country) {
            tgApp.MainButton.hide();
        } else {
            tgApp.MainButton.show();
        }
    }, []);

    const onChengeCountry = (event) => {
        setCountry(event.target.value);
    }
    const onChengeStreet = (event) => {
        setStreet(event.target.value);
    }
    const onChengeSubject = (event) => {
        setSubject(event.target.value);
    }




    return (
        <div className={'form'}>
            <h3>введите ваши данные</h3>
            <input type="text" placeholder={'Страна'} className={'input'} value={country} onChange={onChengeCountry} />
            <input type="text" placeholder={'Улица'} className={'input'} value={street} onChange={onChengeStreet} />
            <select className={'select'} value={subject} onChange={onChengeSubject}>
                <option value={'physiacal'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
}

export default Form;
