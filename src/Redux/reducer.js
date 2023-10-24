import {books} from '../DB'

const defaultState ={
    role: 0,
    bookList: books,

}


export const reducer = (state = defaultState,action)=>{
    if(action.type === 'delete_book'){
        let newState = JSON.parse(JSON.stringify(state))
        const i = newState.bookList.findIndex(book => book.name===action.payload.name);
        if(i !== -1&&newState.bookList[i].status === false) {
            newState.bookList.splice(i,1);
        }
        return newState;
    }

    if(action.type === 'add_book'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.bookList.push({
            name: action.payload.name, 
            author: action.payload.author,
            status: false,
        }) 
        return newState
    }

    if(action.type === 'borrow_book'){
        let newState = JSON.parse(JSON.stringify(state))
        const i = newState.bookList.findIndex(book => book.name===action.payload.name);
        if(i !== -1&&newState.bookList[i].status === false) {
            newState.bookList.splice(i,1);
        }
        return newState
    }

    if(action.type === 'return_book'){
        let newState = JSON.parse(JSON.stringify(state))
        const i = newState.bookList.findIndex(book => book.name===action.payload.name);
        if(i !== -1&&newState.bookList[i].status === false) {
            newState.bookList.push({
                name: action.payload.name,
                author: action.payload.author,
                status: false,
            })
        }
        return newState
    }
    if(action.type === 'change_role') {
        let newState = state
        newState.role = action.payload
        return newState
    }
    return state
}
