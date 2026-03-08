import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>Hi iam bokks detils</h1>
        </div>
    );
};

export default BookDetails;
/**
 * {
    "bookId": 8,
    "bookName": "The Alchemist",
    "author": "Paulo Coelho",
    "image": "https://i.ibb.co.com/zS9jsdK/18144590.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 177,
    "rating": 4.6,
    "category": "Fiction",
    "tags": [
        "Philosophical",
        "Adventure"
    ],
    "publisher": "HarperCollins",
    "yearOfPublishing": 1988
}
 */