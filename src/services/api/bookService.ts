import axios, { AxiosResponse } from 'axios';
import Book from 'components/model/Book';

const backend_url = process.env.REACT_APP_BACKEND_URL;

const getBook = (id: string | undefined) => {
  return axios.get<Book>(`${backend_url}/book/${id}`).then((res) => {
    return res.data;
  });
};

const editBook = (id: string, book: Book) => {
  return axios.put<Book>(`${backend_url}/book/${id}`, book).then((res) => {
    return res.data;
  });
};

const deleteBook = (id: string) => {
  return axios.delete<Book>(`${backend_url}/book/${id}`).then((res) => {
    return res.data;
  });
};

const bookService = { getBook, editBook, deleteBook };

export default bookService;
