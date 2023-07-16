import React from 'react';
import ReactPaginate from 'react-paginate';
import { useBusqueda } from '../hook/useBusqueda';

import '../theme/Pagination.css';


export const Paginate = () => {
    
    const { pageNumber, datosApi, handleClickPaginate } = useBusqueda();
    


    return (
        <ReactPaginate 
            className="pagination"
            nextLabel="Next"
            previousLabel="Previus"
            activeClassName="pagination_link-active"
            pageClassName="page-item"
            pageLinkClassName="pagination_link"
            forcePage={ pageNumber === 1 ? 0 : pageNumber - 1}
            // marginPagesDisplayed={ width < 576 ? 1 : 2 }
            // pageRangeDisplayed={ width < 576 ? 1 : 2 }
            pageCount={ datosApi?.datos?.info?.pages }
            onPageChange={ handleClickPaginate }
        />
    )
}
