import {createStore , compose} from 'redux';
import{rootReducer} from '../store/reducer'


export const configureStore =()=>{
    const store = createStore(rootReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    
    return store;
}

