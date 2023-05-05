import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [coutry, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physiacal');

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
            <input type="text" placeholder={'Страна'} className={'input'} value={coutry} onChange={onChengeCountry} />
            <input type="text" placeholder={'Улица'} className={'input'} value={street} onChange={onChengeStreet} />
            <select className={'select'} value={subject} onChange={onChengeSubject}>
                <option value={'physiacal'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
}

export default Form;
