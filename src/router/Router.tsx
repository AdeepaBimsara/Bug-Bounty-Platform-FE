import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "../pages/home/Home"
import { Login } from '../pages/auth/Login'
import {Register} from "../pages/auth/Register"
import DashMain from '../pages/dashboard/researcher_dashboard/DashMain'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/researcherdash' element={<DashMain/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router