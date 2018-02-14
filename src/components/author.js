import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Author extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const authorId = this.props.match.params.id
    this.props.fetchAuthorIfNeeded(authorId)
  }

  render() {
    const {isFetching, authorInfo, authorBooks} = this.props

    const BookItem = (props) => (
      <li key={props.id}>
        <Link to={`/books/${props.id}`}>{props.title}</Link> ({props.year})
      </li>
    )

    const content = () => {
      if (isFetching) {
        return <p>Loading...</p>
      } else if (authorInfo && authorBooks) {
        return (
          <div>
            <p>Country: {authorInfo.country}</p>
            <p>Books: </p>
            <ul className="author-books-list">
              {authorBooks.map((book) => BookItem(book))}
            </ul>
          </div>
        )
      } else {
        return <p>No data :( </p>
      }
    }

    return (
      <div>
        <section>
          <div className="title"><h2><Link to='/books'>Books</Link></h2></div>
        </section>
        <section>
          <div className="title">
            <Link to='/authors'>Authors</Link>&nbsp;/&nbsp;
            <h2>{authorInfo && authorInfo.name}</h2>
          </div>
          <div className="content">
            {content()}
          </div>
        </section>
      </div>
    )
  }
}
