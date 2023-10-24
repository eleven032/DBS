// import Adapter from 'enzyme-adapter-react-16';
import {getInventory} from './utils';
import {books} from '../DB';

// Enzyme.configure({ adapter: new Adapter() });
const bookList = books;
test('suite: Test getInventory',()=>{
    expect(getInventory(bookList, 'Clean Code')).toEqual(5);
})