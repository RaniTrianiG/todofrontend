// ini untuk deklarasi function/actions

import axios from 'axios';

export function fetchTodos(){
    return{
    type: 'FETCH_TODO',
    payload: axios.get('http://192.168.0.31/todos/')
    };
}

export function createTodos(data){
    return{
        type:'CREATE_FETCH_TODO',
        payload: 

        axios({
            method: 'post',
            url: 'http://192.168.0.31/todos/',
            data: data
          })
    };
}

export function updateTodos(id, value){
    return{
        type: 'UPDATE_FETCH_TODO',
        payload: 
        axios({
            method: 'put',
            url: `http://192.168.0.31/todos/${id}`,
            data: value
        })
    }
}

export function deleteTodos(data){
    return{
        type: 'DELETE_FETCH_HERO',
        payload: 

        axios({
            method: 'delete',
            url : `http://192.168.0.31:5000/api/heroes/${data}`
        })

    }
}


