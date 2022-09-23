import {configureStore} from '@reduxjs/toolkit';
import ExpenseSlicer from '../expense/ExpenseSlicer';

export default configureStore ({
    reducer: {
        expense : ExpenseSlicer.reducer,
    }
})