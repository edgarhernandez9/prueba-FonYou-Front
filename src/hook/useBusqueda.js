
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataApiRickAndMorty, regresar } from '../store/reducer';


export const useBusqueda = () => {
    const datosStore = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nombrePersonaje, setNombrePersonaje] = useState('');
    const [isOpen, setIsOpen] = useState('');
    const [isSpinner, setIsSpinner] = useState(false);
    const handleChange = (event) => {
        
        setNombrePersonaje(event.target.value)
    }

    const handleClick = (valor) => {
        
        switch (valor) {
            case 'busqueda':
                setIsOpen(!Boolean(isOpen) ? 'open' : '');
                break;
            case 'buscar': 
                dispatch(getDataApiRickAndMorty(nombrePersonaje));
                setIsSpinner(true);
                break;
            case 'detalle':
                dispatch(regresar());
                navigate(-1);
                break;
            default:
                break;
        }
    }

    return {
        datosApi: datosStore?.datos,
        isLoading: datosStore.isLoading,
        nombrePersonaje,
        isOpen,
        isSpinner,
        isDetalle: datosStore.datos.isDetalles,
        handleChange,
        handleClick,
        
    }
}