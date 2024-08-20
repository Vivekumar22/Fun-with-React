import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({   // yah store 
    reducer: todoReducer    // yaha multiple reducer v le skte hai but av 1 hai toh 
})