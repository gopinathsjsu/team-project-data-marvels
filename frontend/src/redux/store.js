import { createStore, combineReducers } from 'redux';
import GeneralReducer from './reducer/generalreducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: "root", storage }

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({ greduce: GeneralReducer })
)
let store = createStore(persistedReducer, {})

export default store