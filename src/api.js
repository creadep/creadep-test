export const getBooks = () => {
  return fetch('/api/books')
    .then((res)=> res.json())
}

export const getBook = (id) => {
  return fetch(`/api/books/${id}`)
    .then((res)=> res.json())
}

export const getAuthors = () => (
  fetch(`/api/authors`)
    .then((res) => res.json())
)

export const getAuthor = (authorId) => (
  fetch(`/api/authors/${authorId}`)
    .then((res) => res.json())
)

const getAuthorBooks = (authorId) => (
  fetch(`/api/authors/${authorId}/books`)
    .then((res) => res.json())
)

export const getAuthorWithBooks = (authorId) => (
  Promise.all([getAuthor(authorId), getAuthorBooks(authorId)])
    .then((values) => ({ info: values[0], books: values[1] }))
)
