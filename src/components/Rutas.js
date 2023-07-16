
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Busqueda from '../pages/Busqueda';
import { Card } from '../pages/Card';
import { DetallesPersonaje } from './DetallesPersonaje';


const Rutas = () => {
    return (
        <Router>
            <Busqueda />
            <Routes>
                <Route path='/' element={ <Card /> } />
                <Route path='detalles' element={ <DetallesPersonaje /> } />
            </Routes>
        </Router>
    )
}

export default Rutas;