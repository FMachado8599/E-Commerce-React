import { Header } from './components/header/Header';
import { Footer } from './components/Footer.jsx';
import Productos from './components/main/Productos';
import Landing from './components/main/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreNosotros from './components/main/SobreNosotros';
import Contacto from './components/main/Contacto';
import ItemDetailed from './components/main/ItemDetailed';
import { DataProvider } from './components/DataContext';
// import { useState } from 'react';
import BoughtToast from './components/utils/BoughtToast.jsx';
import CheckOut from './components/main/CheckOut.jsx';


function App() {
    
  return (
    <DataProvider>
      <BrowserRouter>
        <BoughtToast />
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>;
          <Route path='/productos' element={<Productos/>}/>;
          <Route path='/sobre_nosotros' element={<SobreNosotros/>}/>;
          <Route path='/contacto' element={<Contacto/>}/>;
          <Route path='/producto/:id' element={<ItemDetailed/>}/>;
          <Route path='/checkout' element={<CheckOut/>}/>;
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
    )
}

export default App;
