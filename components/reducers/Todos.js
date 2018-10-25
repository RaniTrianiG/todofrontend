// ini untuk get function dari folder actions

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    todos: [],
    todo: {}
}

const datatodos = function(state = initialState, action){
    switch(action.type){
        case 'FETCH_TODO_PENDING' :
           return {...state, fetching: true};
        break;
        case 'FETCH_TODO_FULFILLED' :
           return {...state, fetching: false, fetched: true, todos : action.payload.data};
        break;
       case 'FETCH_TODO_REJECTED' :
           return {...state, error: action.payload};
       break;

       case 'CREATE_FETCH_TODO_PENDING' :
           return {...state, fetching: true};
       break;
       case 'CREATE_FETCH_TODO_FULFILLED' :
       return {...state, fetching: false, fetched: true, todos : [...state.todos, action.payload.data]};
       break;
       case 'CREATE_FETCH_TODO_REJECTED' :
           return {...state, error: action.payload};
       break;

       case 'UPDATE_FECTH_TODO_PENDING' : // untuk loading/pending data
           return {...state, fetching: true};
       break;
       case 'UPDATE_FETCH_TODO_FULFILLED' : // jika data sukses, akan melakukan action ini
       const updated = state.todos.map(hero => {
           if (todo._id == action.payload.data._id) {
             return action.payload.data;
           }
           return todo;
         })
        return {...state, fetching : false, fetched: true, hero : action.payload.data, todos : updated };
           break;
       case 'UPDATE_FETCH_TODO_REJECTED' : // jika data gagal / error maka data akan melakukan action ini
           return {...state, error: action.payload};
       break;

       case 'DELETE_FETCH_TODO_PENDING' :
           return {...state, fetching: true};
       break;
       case 'DELETE_FETCH_TODO_FULFILLED' :
           return {...state, fetching: false, fetched: true, todos: state.todos.filter(todos => todds._id !== action.payload.data._id)};
       break;
       case 'DELETE_FETCH_TODO_REJECTED' :
           return {...state, error: action.payload};
       break;

       default :
    }
    return state;
}
export default datatodos;