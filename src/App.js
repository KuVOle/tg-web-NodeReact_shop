import { useEffect } from 'react';
import './App.css';
const tgApp = window.Telegram.WebApp;

function App() {
  const onClose = () => { tgApp.close(); }
  useEffect(() => { tgApp.ready() }, []); // приложение проиницилизировано и его можно использловать
  return (
    <div>
      <h1>Shop</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
