import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null}
  }

  componentWillMount() {
    console.log('will mount', this.state, this.props)
    const routeBookId = this.props.match.params.id

    if (this.props.data && this.props.data.id === routeBookId) {
      this.setState({data: this.props.data})
    } else {
      this.props.fetchBookIfNeeded(routeBookId)
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('will receive props', this.state, this.props, nextProps)

    // if (nextProps.data && this.props.data['id'] !== nextProps.data['id']) {
    //   this.setState({data: nextProps.data})
    // }
  }

  render() {
    console.log('book render')
    const { isFetching } = this.props
    const data = this.state.data

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
              <h2>{data && !isFetching && data.title}</h2>
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
