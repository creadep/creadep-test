import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BooksListContainer, AuthorsListContainer, AuthorContainer, BookContainer } from './components/components';
import Home from './components/home';
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
)

window._store = store;


/*
booksList
  items: [Book]
  receivedAt: Date

authorsList
  items: [Author]
  receivedAt: Date

openAuthor
  info
  books

openBook
  info

favorites
  books: [ids]
  authors: [ids]
*/

const RouterRoot = () => {
  return (
    <Router>
      <div>
        <h1>Evoplay test task</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BooksListContainer} />
        <Route path="/books/:id" component={BookContainer} />
        <Route exact path="/authors" component={AuthorsListContainer} />
        <Route path="/authors/:id" component={AuthorContainer} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <RouterRoot />
  </Provider>,
  document.getElementById('app')
)
