import React,{useState} from 'react';

import {Group, Container, handleOnClick} from '../../utils';
import { addAction, deleteAction } from '../../../Redux/action';

const Admin = props => {
    const [bookName, setBookName] = useState();
    const [author, setAuthor] = useState();
    const {dispatch} = props;

    return (
        <Container>
            <Group>
                <div id='form'>
                <label for='nameInput'>Book Name</label>
                <input type='text' 
                        onChange={(event) => {setBookName(event.target.value)}}
                        name='nameInput'></input>
                <label for='authorInput'>Author</label>
                <input type='text' 
                        onChange={(event) => {setAuthor(event.target.value)}}
                        name='authorInput'></input>
                </div>
                <button onClick={()=>handleOnClick({name:bookName, author:author}, dispatch, addAction)}>Add</button>
            </Group>
            <Group>
                <div id='form'>
                <label for='nameInput'>Book Name</label>
                <input type='text' 
                        onChange={(event) => {setBookName(event.target.value)}}
                        name='nameInput'></input>
                <label for='authorInput'>Author</label>
                <input type='text' 
                        onChange={(event) => {setAuthor(event.target.value)}}
                        name='authorInput'></input>
                </div>
                <button onClick={()=>handleOnClick({name:bookName, author:author}, dispatch, deleteAction)}>Delete</button>
            </Group>
        </Container>
    )
}

export default Admin;