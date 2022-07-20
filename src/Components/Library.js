import Books from "./Books.js";
import '../css/Library.css';

const Library=({books})=>{
    console.log(books)
    return (
        <div className='library'>
            {books.map(book=>
            <Books
            key={book.id}
            book={book}
            />)}
        </div>
    )
}
export default Library