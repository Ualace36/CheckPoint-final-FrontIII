import {Routes, Route} from "react-router-dom";
import DefaultLayout from "./DefaultLayout"
import Login from "./pages/Login"
import Home from "./pages/Home"

export function Router () {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            </Route>
        </Routes>
        
      
    );
}