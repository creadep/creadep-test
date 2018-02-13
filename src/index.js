import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


const api = {
  getBooks: () => {
    return fetch('/api/books')
      .then((res)=> res.json())
  },

  getBook: (id) => {
    return fetch(`/api/books/${id}`)
      .then((res)=> res.json())
  }
}

class BooksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      errorGetData: null
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    api.getBooks()
      .then((data) => {
        this.setState({data: data})
      })
      .catch((err)=> {
        this.setState({ errorGetData: true })
      })
  }

  li(props) {
    return (
      <li key={props.id}>
        <h3><Link to={`/books/${props.id}`}>{props.title}</Link></h3>
      </li>
    )
  }

  render() {
    const content = () => {
      if (this.state.data) {
        return (
          <ul>
            {this.state.data.map((dataItem) => this.li(dataItem))}
          </ul>
        )
      } else {
        <p>No data :( </p>
      }
    }

    return (
      <div>
        <h2>Books list</h2>
        {content()}
      </div>
    )
  }
}


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: null,
      errorGetData: null
    }
  }

  getData() {
    api.getBook(this.state.id)
      .then((data) => this.setState({data: data}))
      .catch((err) => this.setState({errorGetData: true}))
  }

  componentWillMount() {
    this.getData()
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <h2>{this.state.data ? this.state.data.title : ''}</h2>

    )
  }
}


const RouterRoot = () => {
  return (
    <Router>
      <div>
        <h1>It's React</h1>
        <Link to="/books">All Books</Link>

        <Route exact path="/books" component={BooksList} />
        <Route path="/books/:id" component={Book} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <RouterRoot />,
  document.getElementById('app')
)
