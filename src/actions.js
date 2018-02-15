import { getBooks, getBook, getAuthors, getAuthorWithBooks } from "./api";


export const fetchBooks = () => ({type: 'FETCH_BOOKS'})

export const receiveBooks = (books) => ({
  type: 'RECEIVE_BOOKS',
  books
})

export const fetchBooksIfNeeded = () => (dispatch, getState) => {
  if (!getState().booksList.isFetching) {
    dispatch(fetchBooks())
    getBooks().then((data) => dispatch(receiveBooks(data)))
  }
}


export const fetchBookIfNeeded = (bookId) => (dispatch, getState) => {
  if (!getState().openBook.isFetching) {
    dispatch({type: 'FETCH_BOOK'})
    getBook(bookId).then((bookData) => dispatch({
      type: 'RECEIVE_BOOK',
      book: bookData
    }))
  }
}


export const fetchAuthorsIfNeeded = (authodId) => (dispatch, getState) => {
  if (!getState().authorsList.isFetching) {
    dispatch({type: 'FETCH_AUTHORS'})
    getAuthors().then((authors) => dispatch({
      type: 'RECEIVE_AUTHORS',
      authors
    }))
  }
}


const fetchAuthor = () => ({type: 'FETCH_AUTHOR'})

const receiveAuthor = (info, books) => ({
  type: 'RECEIVE_AUTHOR',
  info,
  books
})

export const fetchAuthorIfNeeded = (authorId) => (dispatch, getState) => {
  if (!getState().openAuthor.isFetching) {
    dispatch(fetchAuthor())
    getAuthorWithBooks(authorId)
      .then((authorData) => dispatch(receiveAuthor(authorData.info, authorData.books)))
  }
}



