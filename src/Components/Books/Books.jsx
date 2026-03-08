import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-4 mt-20'>
                {
                    allBooks.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;