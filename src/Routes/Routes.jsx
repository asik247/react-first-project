import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hero from "../Components/Hero/Hero";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import BookDetails from "../Components/BooksDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,

                loader: () => fetch("/AllBooks.json"),
                Component: Hero
            },
            { path: "listedBooks", Component: ListedBooks },
            { path: "pagesToRead", Component: PagesToRead },
            {
                path: 'bookDetails/:id',
                loader: async ({ params }) => {
                    const res = await fetch('/AllBooks.json')
                    const data = await res.json()

                    const singleBook = data.find(book => book.bookId == params.id)

                    return singleBook
                },
                Component: BookDetails
            }

        ]
    }
])