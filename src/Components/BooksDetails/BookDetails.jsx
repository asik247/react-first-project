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