import React from 'react';
import { connect } from "react-redux";
import {
  fetchBooksIfNeeded,
  fetchBookIfNeeded,
  fetchAuthorsIfNeeded,
  fetchAuthorIfNeeded
} from "../actions";
import BooksList from './books-list';
import Book from "./book";
import AuthorsList from './authors-list';
import Author from './author';


export const BooksListContainer = connect(
  (state) => ({data: state.booksList.items}),
  (dispatch) => {
    return {
      fetchBooksIfNeeded: () => dispatch(fetchBooksIfNeeded())
    }
  }
)(BooksList)


export const BookContainer = connect(
  (state) => ({data: state.openBook.info}),
  (dispatch) => {
    return {
      fetchBookIfNeeded: (bookId) => dispatch(fetchBookIfNeeded(bookId))
    }
  }
)(Book)


export const AuthorsListContainer = connect(
  (state) => ({data: state.authorsList.items}),
  (dispatch) => {
    return {
      fetchAuthorsIfNeeded: () => dispatch(fetchAuthorsIfNeeded())
    }
  }
)(AuthorsList)


export const AuthorContainer = connect(
  (state) => ({
    authorInfo: state.openAuthor.info,
    authorBooks: state.openAuthor.books,
    isFetching: state.openAuthor.isFetching
  }),
  (dispatch) => ({
    fetchAuthorIfNeeded: (authorId) => dispatch(fetchAuthorIfNeeded(authorId))
  })
)(Author)

