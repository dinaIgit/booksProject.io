import '../css/Books.css';
import Counter from './Counter';
export default function Books({book:{id, title, author, yearIssue, genre, iNumber, cover, price, quantity}, onDecClickHandler, onIncClickHandler}){
    return (
        <div className='book'>
            <h2 onClick={titleClickHandler}>{title}</h2>
            <h3>{author}</h3>
            <p>YearIssue: {yearIssue} <br/>  <span><b>Genre:</b> {genre}</span></p>
            <h5>{iNumber}</h5>
            <img src={cover} alt={title}/> <br/>
            <h5>Price: {price} €</h5>
            <h4>The book is available</h4>
            <Counter id={id}
                    quantity={quantity}
                    onDecClickHandler={onDecClickHandler}
                    onIncClickHandler={onIncClickHandler}/>
                    <h3 style={{color:'red'}}>Total: {price * quantity} </h3>
        </div>
    )
}

function titleClickHandler(e){
    e.target.style.color='blue'
}