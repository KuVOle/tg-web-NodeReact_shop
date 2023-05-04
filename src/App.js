import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
const tgApp = window.Telegram.WebApp;

function App() {

  useEffect(() => { tgApp.ready() }, []); // приложение проиницилизировано и его можно использловать
  return (
    <div>
      <Header />
      <h1>Shop</h1>
    </div>
  );
}

export default App;
