
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { consultaPorId } from '../store/reducer';

export const useCard = () => {

    const datosStore = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickDetalle = (id) => {
        dispatch(consultaPorId(id))
        navigate('/detalles');
    }


    return {
        dataDetalles: datosStore.datos.detalles,
        handleClickDetalle
    }

}