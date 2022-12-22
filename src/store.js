import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/Counter/counterSlice";
import { counterReducer } from "./components/Counter/counterState";


const appReducers = combineReducers({
    count: counterReducer
})

const store = configureStore(appReducers);

export default store;