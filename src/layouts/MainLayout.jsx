import { Outlet } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";

function MainLayout(){
    return(
        <div>
            <Header/>
                <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout