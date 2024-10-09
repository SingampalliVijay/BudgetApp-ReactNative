import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import budgetSaga from './BudgetSaga';
import { budgetReducer } from './BudgetReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, budgetReducer);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        budget: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware),
});

const persistor = persistStore(store);
sagaMiddleware.run(budgetSaga);
export { store, persistor };


