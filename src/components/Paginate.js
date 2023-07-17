import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useBusqueda } from '../hook/useBusqueda';

import '../theme/Pagination.css';
import { getDataApiRickAndMorty } from '../store/reducer';



export const Paginate = () => {
    const datosStore = useSelector(state => state);
    const { pageNumber, handleClick, setPageNumber, handleClickPaginate } = useBusqueda();
    
    const handleClickPaginates = (data) => {
        const page = (Number(data.selected) + 1 );
        setPageNumber(page);

        handleClickPaginate(data);
        // setIsSpinner(true);
    }

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
            pageCount={ datosStore?.datos?.datos?.info?.pages }
            onPageChange={ handleClickPaginates }
        />
    )
}
