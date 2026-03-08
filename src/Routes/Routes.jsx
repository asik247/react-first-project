import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hero from "../Components/Hero/Hero";
import Profile from "../Components/Profile/Profile";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {index:true,Component:Hero},
            {path:"profile",Component:Profile}
            
        ]
    }
])