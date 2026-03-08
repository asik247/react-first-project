import React, { use } from 'react';

const AllBooks = ({allBooks}) => {
    const data = use(allBooks)
    console.log(data);
    
    return (
        <div>
            <h1>All Books</h1>
            {console.log(allBooks)}
        </div>
    );
};

export default AllBooks;