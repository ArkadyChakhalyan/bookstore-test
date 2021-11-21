import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducers/reducer";

const  persistedState = localStorage.getItem('bookstoreState') 
    ? JSON.parse(localStorage.getItem('bookstoreState')!) : undefined;

export const store = createStore(reducer, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    localStorage.setItem('bookstoreState', JSON.stringify(store.getState()));
});