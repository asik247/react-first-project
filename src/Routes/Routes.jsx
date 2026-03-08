import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hero from "../Components/Hero/Hero";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {index:true,Component:Hero},
            {path:"listedBooks",Component:ListedBooks},
            {path:"pagesToRead",Component:PagesToRead}
            
        ]
    }
])