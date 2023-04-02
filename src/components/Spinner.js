import React from 'react';

import '../theme/Spinner.css';

const Spinner = ({ isOpenSpinner = false }) => {
    return (
        <>
            {
                !isOpenSpinner ?
                <div></div> :
                <div className='center'>
                    <div className='ring'></div>
                    <span className='loading'>Loading...</span>
                </div>
            }
        </>
    )
}

export default Spinner