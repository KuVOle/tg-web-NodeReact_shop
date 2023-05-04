const tgApp = window.Telegram.WebApp;

export function useTelegramm() {

    const onClose = () => {
        tgApp.close();
    }

    const onToggleButton = () => {
        if (tgApp.MainButton.isVisible) {
            tgApp.MainButton.hide();
        }
        else {
            tgApp.MainButton.show();
        }
    }
    return {
        tgApp,
        user: tgApp?.initDataUnsafe?.user?.username,
        onClose,
        onToggleButton,
    }
};
