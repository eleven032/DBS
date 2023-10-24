import React,{useState} from 'react';

import {Group, Container, handleOnClick} from '../../utils';
import { returnAction, borrowAction } from '../../../Redux/action';

const User = props => {
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
                <button onClick={()=>handleOnClick({name:bookName, author:author}, dispatch, borrowAction)}>Borrow</button>
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
                <button onClick={()=>handleOnClick({name:bookName, author:author}, dispatch, returnAction)}>Return</button>
            </Group>
        </Container>
    )
}

export default User;