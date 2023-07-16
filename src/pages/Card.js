import React from 'react';
import Spinner from '../components/Spinner';
import { useBusqueda } from '../hook/useBusqueda';
import { useCard } from '../hook/useCard';
import { Paginate } from '../components/Paginate';
import '../theme/Card.css';


export const Card = () => {

    const { datosApi, isSpinner } = useBusqueda();
    const { handleClickDetalle } = useCard();

    return (
        <>
            {
                datosApi.isLoading ?
                <div>
                    <Spinner isOpenSpinner={isSpinner} />
                </div> :
                <>
                {
                    datosApi.datos.status !== 200 ?
                    <div className='table'>
                        <div className='container'>
                            <div className='box' >
                                <h2 className='content-info-text'> No existe el personaje </h2>
                                <div className='' style={{ marginTop: '10px'}}>
                                    <img src='' alt='' />
                                </div>
                            </div>

                        </div>
                    </div>:
                    <>
                        <Spinner isOpenSpinner={false} />
                        <div className='table'>
                            {
                                datosApi?.datos?.results.map((value) => (
                                    <div className='container' key={ value.id }>
                                        <div className='box'>
                                            <div className='imgBox'>
                                                <img src={ value.image } alt={ value.id }/>
                                            </div>
                                            <div className='content-info'>
                                                <h2 className='content-info-text' onClick={() => handleClickDetalle(value.id)} > { value.name } <br />
                                                    <span> { value.species } </span> -
                                                    <span> { value.gender } </span>
                                                </h2>
                                                
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <Paginate />
                    </>
                }  
                </>
               
            }
            
        </>
    )
}
