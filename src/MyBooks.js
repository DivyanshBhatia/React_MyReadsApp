import React,{Component} from 'react'
import './App.css'
import MyBookShelf from './MyBookShelf'
class MyBooks extends Component{

	shelfArray = [
    {
      name: `currentlyReading`,
      title: `Currently Reading`
    },
    {
      name: `wantToRead`,
      title: `Want to Read`
    },
    {
      name: `read`,
      title: `Read`
    },
  ]

  render(){
  	const shelfArray=this.shelfArray
  	const booksList = this.props.booksList

  	return(
  		<div className="list-books-content">
              <div>
              	{shelfArray.map((shelf) => (
              		<MyBookShelf 
              			shelfTitle={shelf.title} 
              			key={shelf.title} 
              			booksList={booksList.filter((book)=>book.shelf === shelf.name)}
              			onShelfChange={(book,shelf)=>{
                  			this.props.onShelfChange(book,shelf)
                		}}/>
              		)
              	)	
              }
              </div>
        </div>
        )
  }
}

export default MyBooks