import React,{Component} from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

/*
This component provides search functionality to the myReads App
*/
class SearchBooks extends Component{
	
		state={
			searchText:'',
			searchedBooks:[]
		}
	
	updateBookShelf=(searchedBooks,myBooks)=>{
		return searchedBooks.map((searchedBook)=>{
			
			myBooks.forEach((myBook) => {
				if(myBook.id === searchedBook.id){
					searchedBook.shelf=myBook.shelf
					return
				}
			})
		return searchedBook
		})
	}

	updateSearch(e){
		this.setState({searchText:e.target.value}) 
		if(this.state.searchText.length > 0) { 
			BooksAPI.search(this.state.searchText,20).then((resBooks) => {
			if(resBooks.length>0){
				resBooks.forEach((resBook) => {
					resBook.shelf = 'none'
				})
				resBooks=this.updateBookShelf(resBooks,this.props.myBooks)
				this.setState({searchedBooks:resBooks})	
				}
			})						
		} else {
			this.setState({searchedBooks: []})
			
		}
	}
	render(){
		return(
		<div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input onChange={this.updateSearch.bind(this)} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{this.state.searchedBooks.length > 0 && (
              		this.state.searchedBooks.map((searchedBook) => 
              			<Book key={searchedBook.id} 
              			book={searchedBook} 
              			shelf={searchedBook.shelf} 
              			onShelfChange={(shelf) => {
          				this.props.onShelfChange(searchedBook, shelf);
          				searchedBook.shelf=shelf //Not reloading the page here to enhance user experience
       				 }}/>)
              		)}
              </ol>
            </div>
          </div>
          )
	}
}

export default SearchBooks