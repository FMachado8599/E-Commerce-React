import { Header } from './components/header/Header';
import { Footer } from './components/Footer.jsx';
import Productos from './components/main/Productos';
import Landing from './components/main/Landing';
import "./css/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreNosotros from './components/main/SobreNosotros';
import Contacto from './components/main/Contacto';
import ItemDetailed from './components/main/ItemDetailed';
import { DataProvider } from './components/DataContext';
import { useState } from 'react';


function App() {
    
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>;
          <Route path='/productos' element={<Productos/>}/>;
          <Route path='/sobre_nosotros' element={<SobreNosotros/>}/>;
          <Route path='/contacto' element={<Contacto/>}/>;
          <Route path='/producto/:id' element={<ItemDetailed/>}/>;
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
    )
}

export default App;
