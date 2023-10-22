import { createSlice } from '@reduxjs/toolkit';
import { getCardDate, getRandomCardNumber } from '../../static/functions';

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: [
        {
            id: 1,
            number: getRandomCardNumber(),
            date: getCardDate(),
            sum: 0,
            chosen: true
        }
    ],
    reducers: {
        addToWallet: (state, payload) => {
            payload = payload.payload

            state[payload.wallet - 1].sum += Number(`${payload.operation}${payload.sum}`)
        },
        addWallet: (state) => {
            state.push({
                id: state.length + 1,
                number: getRandomCardNumber(),
                date: getCardDate(),
                sum: 100,
                chosen: false
            });
        },
        deleteWallet: (state, payload) => {
            const index = state.findIndex((wallet) => wallet.id === payload.payload);

            state.splice(index, 1);

            state.map((wallet, i) => (wallet.id = i + 1));

            state[0].chosen = true
        },
        clearWallet: (state, payload) => {
            const id = payload.payload - 1;

            state[id].sum = 0
        },
        chooseWallet: (state, payload) => {
            const id = payload.payload - 1;

            state.forEach((wallet, i) => {
                if (wallet.chosen) {
                    wallet.chosen = false;
                }

                if (i === id) {
                    wallet.chosen = true;
                }
            });
        }
    }
});

export const { addWallet, deleteWallet, clearWallet, chooseWallet, addToWallet } = walletSlice.actions;

export default walletSlice.reducer;
