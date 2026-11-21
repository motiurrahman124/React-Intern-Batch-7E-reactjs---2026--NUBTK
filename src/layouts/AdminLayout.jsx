import { Outlet } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";

function AdminLayout(){
    return(
        <div>
            <Header/>
                <Outlet />
            <Footer/>
        </div>
    )
}

export default AdminLayout