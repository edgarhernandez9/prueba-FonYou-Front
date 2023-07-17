import React from 'react';
import { useBusqueda } from '../hook/useBusqueda';
import Buscar from '../images/icons8-búsqueda.svg';
import Eliminar from '../images/icons8-eliminar-30.png';

import '../theme/Busqueda.css';

const Busqueda = () => {

    const { nombrePersonaje, isOpen, isDetalle, handleChange, handleClick } = useBusqueda();

    return (
        <nav>
            <h2 style={{ fontSize: '30px'}}>Dashboard</h2>
            <div className="nav-items">
                {
                    !isDetalle &&
                    <div className='wrapper'>
                        <div className={ `search ${isOpen}` }>
                            <input
                                value={nombrePersonaje}
                                onChange={handleChange}
                                placeholder="Nombre personaje"
                                type='text'
                            />
                            <button
                                onClick={(e) => handleClick(e,'busqueda')}
                                className={
                                    `nav-button iconoBoton uil uil-${isOpen
                                        ? "multiply"
                                        : "search"}`
                                }
                                style={{
                                    width: '50px'
                                }}
                            >
                                <img src={isOpen === '' ? Buscar : Eliminar} alt="" />
                            </button>
                        </div>
                        <div className={ `items ${isOpen}` }>
                        </div>
                    </div>
                }

                <button
                    className='nav-button'
                    style={{
                        background: 'transparent'
                    }}
                    onClick={ !isDetalle ? (e) => handleClick(e, 'buscar') : (e) => handleClick(e, 'detalle')}
                >{!isDetalle ? "Buscar" : "Regresar"}</button>
            </div>
        </nav>
    )
}


export default Busqueda;