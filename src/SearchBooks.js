import React,{Component} from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
	constructor(){
		super();
		this.state={
			searchText:'',
			searchedBooks:[]
		}
	}

	updateSearch(e){
		this.setState({searchText:e.target.value}) 
		if(this.state.searchText.length > 0) { 
			BooksAPI.search(this.state.searchText,20).then(res =>this.setState({searchedBooks: res}));			
		} else {
			this.setState({searchedBooks: []})
			console.log()
		}
	}
	render(){
		return(
		<div className="search-books">
            <div className="search-books-bar">
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
              		this.state.searchedBooks.map(searchedBook => <Book key={searchedBook.id} book={searchedBook}/>)
              		)}
              </ol>
            </div>
          </div>
          )

	}


}

export default SearchBooks