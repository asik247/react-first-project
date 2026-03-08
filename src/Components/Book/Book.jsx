import React from 'react';
import { NavLink } from 'react-router';

const Book = ({ book }) => {

    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        yearOfPublishing
    } = book;

    return (
     <NavLink to={`/bookDetails/${bookId}`}></NavLink>
    );
};

export default Book;