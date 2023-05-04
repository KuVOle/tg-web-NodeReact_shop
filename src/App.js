import { useEffect } from 'react';
import './App.css';
// import Header from './components/Header/Header';
import { useTelegramm } from './hooks/useTelegramm';

function App() {

  const { onToggleButton, tgApp } = useTelegramm();

  useEffect(() => { tgApp.ready() }, []); // приложение проиницилизировано и его можно использловать
  return (
    <div>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
