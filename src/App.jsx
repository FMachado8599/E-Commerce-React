import { Header } from './components/header/Header';
import Productos from './components/main/Productos';
import Landing from './components/main/Landing';
import "./css/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App;
