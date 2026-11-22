import { Outlet } from "react-router";
import Footer from "../common/Footer";
import Header2 from "../common/Header2";

function MainLayout(){
    return(
        <div>
            <Header2/>
                <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout