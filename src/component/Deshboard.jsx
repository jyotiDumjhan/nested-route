import {Link,NavLink,Outlet } from "react-router-dom";
function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="settings">Settings</NavLink>
            </nav>
           <Outlet></Outlet>
        </div>
    );
}
export default Dashboard;