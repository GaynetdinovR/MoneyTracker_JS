import { createSlice } from '@reduxjs/toolkit';
import { getDefaultDates } from '../../static/functions.js'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        currency: {
            symbol: '₽',
            name: 'RUB'
        },
        wallet: 1,
        historyFilter: {
            operation: '+',
            dates: getDefaultDates()
        }
        
    },
    reducers: {
        chooseWalletInSettings: (state, payload) => {
            state.wallet = payload.payload
        },
        changeCurrencyInSettings: (state, payload) => {
            state.currency = payload.payload
        },
        setFilter: (state, payload) => {
            state.historyFilter = payload.payload
        }
    }
});
export const { chooseWalletInSettings, changeCurrencyInSettings, setFilter } = settingsSlice.actions;

export default settingsSlice.reducer;
