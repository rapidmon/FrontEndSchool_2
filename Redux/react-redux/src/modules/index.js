import { combineReducers } from 'redux';
import goodsReducer from './goodscounter.jsx';
import stockReducer from './stockcounter.jsx';

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});

export default rootReducer;