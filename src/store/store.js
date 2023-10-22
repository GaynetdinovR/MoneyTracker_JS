import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './walletSlice/walletSlice';
import historyReducer from './historySlice/historySlice'
import settingsReducer from './settingsSlice/settingsSlice';

const store = configureStore({
    reducer: {
        wallets: walletReducer,
        history: historyReducer,
        settings: settingsReducer
    }
});

export default store;
