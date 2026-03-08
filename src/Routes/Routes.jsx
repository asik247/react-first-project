import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hero from "../Components/Hero/Hero";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import BookDetails from "../Components/BooksDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {index:true,

            loader:()=>fetch("/AllBooks.json"),   
            Component:Hero},
            {path:"listedBooks",Component:ListedBooks},
            {path:"pagesToRead",Component:PagesToRead},
           {path:'bookDetails/:id',
            loader:({params})=>fetch(`AllBooks.json/${params.id}`)
            ,Component:BookDetails}
            
        ]
    }
])