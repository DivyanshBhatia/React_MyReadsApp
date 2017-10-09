import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import MyBooks from './MyBooks'
import { Route, Link } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[]
  }

  componentDidMount(){
    this.fetchBooks();
  }

  fetchBooks =()=>{
    BooksAPI.getAll().then((books) => this.setState({ books }))
      }

  changeShelf = (book,shelf) => {
    
    BooksAPI.update(book,shelf).then(()=>{
      this.fetchBooks();
    })
  }

  render() {
    return (
      <div className="app">
        <Route
            exact
            path="/searchBooks"
            render={() => (
          <SearchBooks myBooks={this.state.books} onShelfChange={(searchedBook,shelf)=>{
            this.changeShelf(searchedBook,shelf)
          }}/>
          )}/>
        <Route
            exact
            path="/"
            render={(history) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <MyBooks
                booksList={this.state.books}
                onShelfChange={(myBook,shelf)=>{
                  this.changeShelf(myBook,shelf)
                }} />
          <div className="open-search">
            <Link to="/searchBooks">
              Add a book
            </Link>
          </div>
          </div>
          )}/>
          
      </div>
    )
  }
}

export default BooksApp
