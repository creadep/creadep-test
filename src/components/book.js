import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null}
  }

  componentWillMount() {
    console.log('will mount', this.state, this.props)
    this.controlDataSet(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('will receive props', this.state, this.props, nextProps)
    this.controlDataSet(nextProps)
  }

  controlDataSet(props) {
    const routeId = props.match.params.id
    const dataIsCorrect = () => !!props.data && props.data.id.toString() === routeId.toString()

    if (dataIsCorrect()) {
      if (!this.state.data || this.state.data.id !== props.data.id) {
        this.setState({data: props.data})
      }
    } else {
      props.fetchBookIfNeeded(routeId)
    }
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
        return <p>{isFetching ? 'Loading...' : 'No data.'}</p>
      }
    }

    return (
      <div>
        <section>
          <div className="title">
            <Link to='/books'>Books</Link>&nbsp;/&nbsp;
            <h2>{!!data && data.title}</h2>
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
