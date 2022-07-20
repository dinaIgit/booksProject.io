export default function BookFullInfo({book:{title, author, yearIssue, genre, iNumber, cover}, closeClickHandler}){
    return (
        <div className='full-info'>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>YearIssue: {yearIssue} <br/>  <span><b>Genre:</b> {genre}</span></p>
            <h5>{iNumber}</h5>
            <img src={cover} alt={title}/> <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste qui ratione? Dolorum labore, ut similique nemo at ea? Voluptate modi esse nihil et molestiae ratione vel dignissimos neque provident mollitia autem voluptatum odit molestias deserunt, rem alias quae obcaecati perferendis repudiandae inventore nesciunt. Debitis inventore quae id vero adipisci!</p>
            <button obClick={closeClickHandler}>close</button>
        </div>
    )
}