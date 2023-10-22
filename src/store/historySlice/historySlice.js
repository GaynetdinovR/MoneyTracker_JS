import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: [
        {
            id: 1,
            sum: 800,
            operation: '+',
            description: 'Some description.',
            category: 'gift',
            date: '30.09.2023 13:13',
            wallet: 1
        }
    ],
    reducers: {
        addOperation: (state, payload) => {
            payload = payload.payload

            state.push({
                id: state.length + 1,
                sum: payload.sum,
                operation: payload.operation,
                date: payload.date,
                description: payload.description,
                category: payload.category,
                wallet: payload.wallet
            })
        },
        clearWalletHistory: (state, payload) => {
            return state.filter(elem => elem.wallet !== payload.payload)
        }
    }
});

export const { addOperation, clearWalletHistory } = historySlice.actions;

export default historySlice.reducer;
