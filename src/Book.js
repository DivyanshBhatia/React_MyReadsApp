import React,{Component} from 'react'
import './App.css'
import NoBookCover from './icons/BookCoverNotFound.jpg'

/*
This component is the basic building block of the myReads app
*/

class Book extends Component{
	changeShelf = (e) => {
    this.props.onShelfChange(e.target.value)
  }
	render(){
		return(
			<li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks?this.props.book.imageLinks.thumbnail:NoBookCover}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={this.changeShelf} value={this.props.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
              </li>

	)}}

export default Book