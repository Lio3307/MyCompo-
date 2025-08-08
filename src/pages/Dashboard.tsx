import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {

    const location = useLocation()
    const pathName: string = location.pathname

    return (
        <Sidebar>
            <Outlet/>
        </Sidebar>
    )
}