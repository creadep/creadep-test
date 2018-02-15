import React, { Component } from "react";
import { Link } from "react-router-dom";


class BooksList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchBooksIfNeeded()
  }

  Item(props) {
    return (
      <li key={props.id}>
        <h3><Link to={`/books/${props.id}`}>{props.title}</Link></h3>,&nbsp;
        <small><Link to={`/authors/${props.author.id}`}>{props.author.name}</Link></small>
      </li>
    )
  }

  render() {
    const { data, isFetching } = this.props;
    const Item = this.Item;

    const content = () => {
      if (data && data.length) {
        return (
          <ul className="books-list">
            {data.map((dataItem) => Item(dataItem))}
          </ul>
        )
      } else {
        return <p>{isFetching ? 'Loading...' : 'No data.'}</p>
      }
    }

    return (
      <div>
        <section>
          <div className="title"><h2>Books</h2></div>
          <div className="content">
            {content()}
          </div>
        </section>
        <section>
          <div className="title"><h2><Link to='/authors'>Authors</Link></h2></div>
        </section>
      </div>
    )
  }
}

export default BooksList
