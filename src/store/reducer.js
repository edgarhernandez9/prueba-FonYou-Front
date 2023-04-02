import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const getDataApiRickAndMorty = createAsyncThunk('obtenerDatos', async (nombrePersonaje) => {
    
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`);
        const data = {
            ...response.data,
            status: response.status
        }
        return data;
    } catch (error) {
        const data = {
            error: error.response.data,
            status: error.response.status
        }
        return data;
    }
});

export const datos = createSlice(({
    name: 'apiRickMorty',
    initialState: {
        datos: null,
        isLoading: true,
        detalles: [],
        isDetalles: false
    },
    reducers: {
        consultaPorId: (state, action) => {
            if (state.datos) {
                const filtrados = state.datos.results.filter(detalles => detalles.id === action.payload);
                state.isDetalles = true;
                state.detalles = filtrados
            } else {
                state.detalles= []
            }
        },
        regresar: (state) => {
            state.isDetalles = false;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataApiRickAndMorty.fulfilled, (state, action) => {
            state.isLoading = false;
            state.datos = action.payload;
        })
    }
}));

export const { consultaPorId, regresar } = datos.actions;

export default datos;