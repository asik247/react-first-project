import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-6'>Books</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;