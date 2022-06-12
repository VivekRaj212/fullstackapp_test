import { useState } from 'react';
import './App.css'
import ProductData from './components/ProductData';
import {Route,Routes} from "react-router-dom";
import FormData from './components/FormData';

function App() {


  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<FormData/>}/>
     <Route path='/detail' element={<ProductData/>}/>
     </Routes>
    </div>
  )
}

export default App
