import { combineReducers } from "redux";

const booksList = (state = {
  items: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_BOOKS':
      return Object.assign({}, state, {
        items: action.books,
        isFetching: false
      })

    default:
      return state
  }
}


const openBook = (state = {
  info: null,
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'FETCH_BOOK':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_BOOK':
      return Object.assign({}, state, {
        info: action.book,
        isFetching: false
      })

    default:
      return state
  }
}


const authorsList = (state = {
  items: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'FETCH_AUTHORS':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_AUTHORS':
      return Object.assign({}, state, {
        items: action.authors,
        isFetching: false
      })

    default:
      return state
  }
}


const openAuthor = (state = {
  isFetching: false,
  info: null,
  books: null
}, action) => {
  switch(action.type) {
    case 'FETCH_AUTHOR':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_AUTHOR':
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info,
        books: action.books
      })

    default:
      return state
  }
}


const RootReducer = combineReducers({
  booksList,
  openBook,
  authorsList,
  openAuthor
})

export default RootReducer
