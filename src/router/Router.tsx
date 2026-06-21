import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "../pages/home/Home"
import { Login } from '../pages/auth/Login'
import {Register} from "../pages/auth/Register"
import DashMain from '../pages/dashboard/researcher_dashboard/DashMain'
import BrowserProgram from '../pages/programs/BrowserProgram'
import ProgramDetails from '../pages/programs/ProgramDetails'
import SubmitReport from '../pages/programs/SubmitReport'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element ={<Home/>}/> */}
            <Route path="/" element ={<DashMain/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/researcherdash' element={<DashMain/>}/>
            <Route path='/programs' element={<BrowserProgram/>}/>
            <Route path='/programs/:id' element={<ProgramDetails/>}/>
            <Route path='/submit-report/:id' element={<SubmitReport/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router