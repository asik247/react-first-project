import React from 'react';

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
        <div className="card bg-base-100 shadow-xl p-4">

            {/* Image */}
            <figure className="bg-gray-100 p-6 rounded-xl">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[220px] object-contain"
                />
            </figure>

            <div className="card-body p-3">

                {/* Tags */}
                <div className="flex gap-2">
                    {
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>

                {/* Book Name */}
                <h2 className="card-title text-xl font-bold mt-2">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-gray-500">
                    By : {author}
                </p>

                <div className="border-t border-dashed my-2"></div>

                {/* Bottom Info */}
                <div className="flex justify-between items-center text-sm">

                    <p>{category}</p>

                    <p>⭐ {rating}</p>

                </div>

                <div className="flex justify-between text-sm text-gray-500">
                    <p>{totalPages} Pages</p>
                    <p>{yearOfPublishing}</p>
                </div>

            </div>
        </div>
    );
};

export default Book;