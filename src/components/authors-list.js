import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class AuthorsList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchAuthorsIfNeeded()
  }

  Item(props) {
    return (
      <li key={props.id}>
        <h3><Link to={`/authors/${props.id}`}>{props.name}</Link></h3>
      </li>
    )
  }

  render() {
    const { data, isFetching } = this.props;
    const Item = this.Item;

    const content = () => {
      if (data && data.length) {
        return (
          <ul className="authors-list">
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
          <div className="title"><h2><Link to='/books'>Books</Link></h2></div>
        </section>
        <section>
          <div className="title"><h2>Authors</h2></div>
          <div className="content">
            {content()}
          </div>
        </section>
      </div>
    )
  }
}
