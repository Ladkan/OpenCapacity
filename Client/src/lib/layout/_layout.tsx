import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useGetUser } from "../auth/auth.hooks";

function Layout(){

      const { data: user, ...userQuery } = useGetUser();

    return(
        <div className='min-h-screen bg-white'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout