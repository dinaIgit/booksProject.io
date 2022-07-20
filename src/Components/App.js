import '../css/App.css';
import React from 'react';
import BookFullInfo from './BookFullInfo';
import Library from './Library';

export const MyContext=React.createContext();

function getBooks(){
    return [
    {
        id:0,
        title: 'Harry Potter',
        author: 'Joan Rowling',
        yearIssue: 1995,
        genre: 'Adventure',
        iNumber: 234561,
        quantity:0,
        price: 12,
        cover: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2F9781408855652-png.jpg'
    },
    {
        id:1,
        title: 'Lord of the Rings',
        author: 'John Tolkien',
        yearIssue: 1978,
        genre: 'Saga',
        iNumber: 7849632,
        quantity:0,
        price: 18,
        cover: 'https://m.media-amazon.com/images/I/51waks01PAL.jpg'
    },
    {
        id:2,
        title: 'Emma',
        author: 'Jane Austin',
        yearIssue: 1816,
        genre: 'Drama',
        iNumber: 7849459,
        quantity:0,
        price: 15,
        cover: 'https://images.penguinrandomhouse.com/cover/9780307386847'
    }
]
}
export default class App extends React.Component{

state={
    books: getBooks(),
    currentBook:null
}

onIncClickHandler=(id)=>{
    const newBooks=[...this.state.books];
    const index=newBooks.findIndex(book=>book.id===id);
    if(index>=0 && newBooks[index].quantity<10){
        const book={...newBooks[index]}
        book.quantity++;
        newBooks[index]=book;
        this.setState({...this.state, books: newBooks})
    }  
    }

    onDecClickHandler=(id)=>{
    const newBooks=[...this.state.books];
    const index=newBooks.findIndex(book=>book.id===id);
    if(index>=0 && newBooks[index].quantity>0){
        const book={...newBooks[index]}
        book.quantity--;
        newBooks[index]=book;
        this.setState({...this.state, books: newBooks})
    }  
    }

    orderHandler = ()=>{
    const orderBooks = this.state.books.filter(book => book.quantity > 0);
    let orderMessage = 'You order: ';
    orderBooks.forEach(b => orderMessage += `${b.title}, `);
    orderMessage += `sum of your order: ${orderBooks.reduce((sum, b) => sum += b.quantity * b.price, 0)}`
    console.log(orderMessage)
    }


    render(){
    console.log(this.state.books)
    return (
        <div className="App">
        <MyContext.Provider value ={{
            onDecClickHandler: this.onDecClickHandler,
            onIncClickHandler: this.onIncClickHandler,
            imgClickHandler: this.imgClickHandler
        }} > {
            this.state.currentBook ?
            <BookFullInfo book = {this.state.currentBook} 
            closeClickHandler = {this.closeClickHandler}/>
            :
            <>
            <Library books = {this.state.books}/>
            <button onClick = {this.orderHandler} >Order</button>  
            </>   }
    
        </MyContext.Provider>                
        </div>
    )
    }
}