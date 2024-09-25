import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import budgetSaga from './BudgetSaga';
import { budgetReducer } from './BudgetReducer';


const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
    reducer: {
        budget: budgetReducer,
    },
    middleware:(gDM)=>gDM({
        serializableCheck:false,
        immutableCheck:false,
        thunk:false
    }).concat(sagaMiddleWare)
});

sagaMiddleWare.run(budgetSaga);
export default store;

