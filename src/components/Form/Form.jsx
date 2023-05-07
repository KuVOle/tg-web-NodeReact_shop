import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegramm } from '../../hooks/useTelegramm';


const Form = () => {

    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physiacal');

    const { tgApp } = useTelegramm();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        };
        tgApp.sendData(JSON.stringify(data));
        // eslint-disable-next-line
    }, [country, street, subject]);

    useEffect(() => {
        tgApp.onEvent('mainButtonClicked', onSendData);
        return () => {
            tgApp.offEvent('mainButtonClicked', onSendData);
        }
        // eslint-disable-next-line
    }, [onSendData]);

    useEffect(() => {
        tgApp.MainButton.setParams({ text: 'Отправить данные', });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tgApp.MainButton.hide();
        } else {
            tgApp.MainButton.show();
        }
        // eslint-disable-next-line
    }, [country, street]);

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
            <h3>Введите ваши данные</h3>
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
