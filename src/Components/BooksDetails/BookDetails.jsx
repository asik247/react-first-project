import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {

    const details = useLoaderData();

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = details;

    return (

        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10">

            {/* Image Section */}
            <div className="bg-gray-100 p-10 rounded-2xl flex justify-center items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[350px] object-contain"
                />
            </div>

            {/* Details Section */}
            <div>

                <h1 className="text-4xl font-bold">{bookName}</h1>

                <p className="text-gray-500 mt-2 text-lg">
                    By : {author}
                </p>

                <div className="border my-4"></div>

                <p className="font-medium">
                    <span className="font-bold">Category :</span> {category}
                </p>

                <p className="mt-4">
                    <span className="font-bold">Review :</span> {review}
                </p>

                {/* Tags */}
                <div className="flex gap-3 mt-4">
                    {
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))
                    }
                </div>

                <div className="border my-4"></div>

                {/* Extra Info */}
                <div className="space-y-2 text-gray-600">

                    <p>
                        <span className="font-semibold">Number of Pages :</span> {totalPages}
                    </p>

                    <p>
                        <span className="font-semibold">Publisher :</span> {publisher}
                    </p>

                    <p>
                        <span className="font-semibold">Year of Publishing :</span> {yearOfPublishing}
                    </p>

                    <p>
                        <span className="font-semibold">Rating :</span> ⭐ {rating}
                    </p>

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="btn btn-outline">Read</button>
                    <button className="btn btn-success text-white">Wishlist</button>
                </div>

            </div>

        </div>
    );
};

export default BookDetails;