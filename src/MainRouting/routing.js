import { createBrowserRouter } from "react-router-dom";
import LoginComp from '../layout/LoginComp';
import PageNotFoundComp from '../layout/PageNotFoundComp';
import MainDashboardComp from '../layout/MainDashboardComp';
import ClassComp from "../components/ClassComp";
import ParentComp from "../components/ParentComp";
import MyImagesComp from "../components/MyImagesComp";
import MyEventComp from "../components/MyEventComp";
import FormValComp from "../components/FormValComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";

const router = createBrowserRouter([
//    default routing 
    {path:"",element:<LoginComp/>},
    // naming routing 
    {path:"login",element:<LoginComp/>},
   
    // child routing
    {path:"maindashboard",element:<MainDashboardComp/>,children:[
        {path:"",element:<MyImagesComp/>},
        {path:"images",element:<MyImagesComp/>},
        {path:"parent",element:<ParentComp/>},
        {path:"event",element:<MyEventComp />},
        {path:"form",element:<FormValComp/>},
        {path:"productdash",element:<ProductDashComp/>},
        {path:"productadd",element:<ProductAddComp/>},
        {path:"productedit",element:<ProductEditComp />},
          //parameterize routing
       {path:"classcomp/:id",element:<ClassComp />},

       {path:"hooks",element:<ReactHooksComp/>,children:[
        {path:"usestate",element:<UseStateHookComp/>},
        {path:"useeffect",element:<UseEffectHookComp/>}
       ]}
       
    ]},
    //wild card routing
    {path:"*",element:<PageNotFoundComp />}

])

export default router