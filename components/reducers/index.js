import { combineReducers } from 'redux';

import datatodos from './Todos';

const appReducer = combineReducers({
    todoapps : datatodos
});

export default appReducer;