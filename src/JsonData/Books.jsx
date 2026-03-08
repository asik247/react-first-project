import React, { useEffect, useState } from 'react';
import AllBooks from '../Components/AllBooks/AllBooks';

const Books = () => {
    const [allBooks,setAllBooks] = useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res=>res.json()).then(data=>{
            setAllBooks(data)
        })
    },[])
    return (
        <div>
            <AllBooks allBooks={allBooks}></AllBooks>
            {console.log(allBooks)}
        </div>
    );
};

export default Books;