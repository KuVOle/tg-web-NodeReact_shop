import React from 'react';
import Button from '../Button/Button';
import { useTelegramm } from '../../hooks/useTelegramm';
import './Header.css';

const Header = () => {

    const { user, onClose } = useTelegramm();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{user}</span>
        </div>
    );
}

export default Header;
