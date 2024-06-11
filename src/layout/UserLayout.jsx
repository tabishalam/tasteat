import { Outlet } from "react-router-dom";

import TopBar from "../component/TopBar/TopBar";
import Navbar from "../component/Navbar/Navbar";

import classes from "./UserLayout.module.scss";

function UserLayout() {
    return(
    <main>
        <TopBar />
        <Navbar />
        <Outlet />        
    </main>
    )
}

export default UserLayout;