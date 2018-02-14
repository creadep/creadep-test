import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Book extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const bookId = this.props.match.params.id
    this.props.fetchBookIfNeeded(bookId)
  }

  render() {
    const data = this.props.data

    const content = () => {
      if (data) {
        return (
          <div>
            <Link to={`/authors/${data.author.id}`}>{data.author.name}</Link>, {data.year}
            <p>Pages: {data.pages}</p>
          </div>
        )
      } else {
        return <div><p>No data :( </p></div>
      }
    }

    return (
      <div>
        <section>
          <div className="title">
            <Link to='/books'>Books</Link>&nbsp;/&nbsp;
              <h2>{data && data.title}</h2>
          </div>
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
