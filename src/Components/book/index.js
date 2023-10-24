import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    justify-content:space-around;
`
const Book = props => {
    const {name, author} = props.book;
    
    return (
        <Container>
            <div>{name}</div>
            <div>{author}</div>
            <div>{props.inventory}</div>
        </Container>
    )
}

export default Book;
