import { useEffect } from 'react';
import './App.css';
import { useTelegramm } from './hooks/useTelegramm';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {

  const { tgApp } = useTelegramm();

  // eslint-disable-next-line
  useEffect(() => { tgApp.ready() }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
