import React from 'react';
import { useCard } from '../hook/useCard';

import '../theme/DetallesPersonaje.css';


const DetallesPersonaje = () => {
    const { dataDetalles } = useCard();
    
    return (
      <table className='table-detalles'>
        <thead className='table-detalles-head'>
            <tr>
              <th>  </th>
              <th className='table-detalles-head-descripcion'> Descripción </th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={dataDetalles[0].image} />
            </td>
            <td className='table-detalles-body-descripcion'>
              <p>Nombre: {dataDetalles[0].name}</p>
              <p>Genero: {dataDetalles[0].gender}</p>
              <p>Especie: {dataDetalles[0].species}</p>
              <p>Creacion: {dataDetalles[0].created}</p>
              <p>Estatus: {dataDetalles[0].status}</p>
              <p>Localizacion: {dataDetalles[0].location.name}</p>
              <p>Episodio: {dataDetalles[0].episode[0]}</p>
              <p>{dataDetalles[0].type === '' ? '' : `Tipo: ${dataDetalles[0].type}`}</p>
            </td>
          </tr>
        </tbody>

      </table>
    )
}

export default DetallesPersonaje;