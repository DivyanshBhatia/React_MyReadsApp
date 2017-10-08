import React,{Component} from 'react'
import './App.css'
import Book from './Book'

class MyBookShelf extends Component{

	render(){
		const myBooks = this.props.booksList
		const shelfTitle = this.props.shelfTitle
		return(
			<div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{
                    		myBooks.map((myBook)=>(
                    			<Book key={myBook.id}
                    				book={myBook} 
                    				shelf={myBook.shelf}
               					    onShelfChange={(shelf)=>{
                						this.props.onShelfChange(myBook,shelf)
                				}}/>
                    			))
                    	}
                    </ol>
                   </div>
             </div>

			)
	}

}

export default MyBookShelf