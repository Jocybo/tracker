import {configureStore} from '@reduxjs/toolkit';
import expenseTracker from '../expense/ExpenseSlicer';

export default configureStore ({
    reducer: {
        expense : expenseTracker.reducer
    }
})