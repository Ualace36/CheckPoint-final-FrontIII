import {Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


 function DefaultLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default DefaultLayout
