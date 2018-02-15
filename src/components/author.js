import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorInfo: null,
      authorBooks: null
    }
  }

  componentWillMount() {
    this.controlDataSet(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.controlDataSet(nextProps)
  }

  controlDataSet(props) {
    const routeId = props.match.params.id
    const dataIsCorrect = () => !!props.authorInfo && props.authorInfo.id.toString() === routeId.toString()

    if (dataIsCorrect()) {
      if (!this.state.authorInfo || this.state.authorInfo.id !== props.authorInfo.id) {
        this.setState({ authorInfo: props.authorInfo, authorBooks: props.authorBooks })
      }
    } else {
      props.fetchAuthorIfNeeded(routeId)
    }
  }

  render() {
    const { authorInfo, authorBooks } = this.state
    const { isFetching } = this.props

    const BookItem = (props) => (
      <li key={props.id}>
        <Link to={`/books/${props.id}`}>{props.title}</Link> ({props.year})
      </li>
    )

    const content = () => {
      if (authorInfo && authorBooks) {
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
        return <p>{isFetching ? 'Loading...' : 'No data.'}</p>
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
