import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
  
 if(localStorage.getItem('token')!==null){
    return <Outlet/>
 }else{
  return <Navigate to='/login'/>
 }
}

export default ProtectedRoutes