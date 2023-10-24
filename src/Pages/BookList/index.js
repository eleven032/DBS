import React from 'react';

import { connect } from "react-redux";
import { getInventory } from '../../Components/utils';
import Book from '../../Components/book';
import Footer from '../../Components/footer';
import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
`

const BookList = props => {
    const {role, bookList} = props;

    return (
        <>
            <Header>
                <h1>Book List</h1>  
            </Header>
            <ul>
                {bookList.filter((book, index) =>
                    bookList.findIndex(i => i.name === book.name) === index)
                    .map(book=><li key={book.name}><Book book={book} inventory={getInventory(bookList, book.name)}/></li>)}       
            </ul>
            <Footer role={role}/>
        </>
    )
}

const mapStateToProps = (state, props) => ({
    bookList: state.bookList,
    role:state.role,
  });
  
export default connect(mapStateToProps)(BookList);
