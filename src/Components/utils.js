import styled from 'styled-components';

export const Group = styled.div`
    display:flex;
`
export const Container = styled.div`
    display:flex;
    justify-content:space-around;
`

////////////////////////////////////////////////////////////////////////////
export const getInventory = (bookList, name) => { 
    const res = bookList.filter(book => book.name===name)
    return res.length;
}

// export const emptyCheck = (message) => {
//     if (message.trim().length === 0) {
//         alert('Can not be empty');
//     }
// }

export const handleOnClick = (payload, dispatch, action) => {
    if (payload.name.trim().length === 0||payload.author.trim().length===0) {
        alert('Input can not be empty!');
    } else {
        dispatch(action(payload));
    }
}