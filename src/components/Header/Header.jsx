import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    const onClose = () => { tgApp.close(); }
    const tgApp = window.Telegram.WebApp;

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <p>tgApp</p>
            <span className={'username'}>{tgApp?.initDataUnsafe?.user?.username}</span>
        </div>
    );
}

export default Header;
