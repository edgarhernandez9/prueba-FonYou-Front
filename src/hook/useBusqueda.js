
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataApiRickAndMorty, regresar } from '../store/reducer';


export const useBusqueda = () => {
    const datosStore = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nombrePersonaje, setNombrePersonaje] = useState('');
    const [ pageNumber, setPageNumber ] = useState(1);
    const [isOpen, setIsOpen] = useState('');
    const [isSpinner, setIsSpinner] = useState(false);

    const handleChange = (event) => {
        
        setNombrePersonaje(event.target.value)
    }

    const handleClick = (event, valor) => {
        
        switch (valor) {
            case 'busqueda':
                setIsOpen(!Boolean(isOpen) ? 'open' : '');
                break;
            case 'buscar':
                setPageNumber(1);
                dispatch(getDataApiRickAndMorty({nombrePersonaje, pageNumber}));
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

    const handleClickPaginate = (data) => {
        console.log("switch pagintae", data);
        const page = (Number(data.selected) + 1 );
        console.log('page', page);
        dispatch(getDataApiRickAndMorty({nombrePersonaje, page}));
        setIsSpinner(true);
    }

    return {
        datosApi: datosStore?.datos,
        isLoading: datosStore.isLoading,
        nombrePersonaje,
        isOpen,
        isSpinner,
        isDetalle: datosStore.datos.isDetalles,
        pageNumber,
        handleChange,
        handleClick,
        setPageNumber,
        handleClickPaginate
    }
}