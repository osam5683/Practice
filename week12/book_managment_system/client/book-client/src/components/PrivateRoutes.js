import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    let auth=localStorage.getItem("token");
    return(
        auth ? <Outlet />: <Navigate t="/login"/>
    )
}
export default PrivateRoutes;