
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { datos } from './reducer';


const rootReducer = combineReducers({
    datos: datos.reducer
});


const store = configureStore({
    reducer: rootReducer
});

export default store;