import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    const tgApp = window.Telegram.WebApp;
    const onClose = () => { tgApp.close(); }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <p>{tgApp}</p>
            <span className={'username'}>{tgApp?.initDataUnsafe?.user?.username}</span>
        </div>
    );
}

export default Header;
