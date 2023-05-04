import React from 'react';
import Button from '../Button/Button';
import { useTelegramm } from '../../hooks/useTelegramm';
import './Header.css';

const Header = () => {

    const { user, onClose } = useTelegramm();

    return (
        <div className={'header'}>
            <span className={'username'}>{user}</span>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
}

export default Header;
