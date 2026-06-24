import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "../pages/home/Home"
import { Login } from '../pages/auth/Login'
import {Register} from "../pages/auth/Register"
import DashMain from '../pages/dashboard/researcher_dashboard/DashMain'
import BrowserProgram from '../pages/programs/BrowserProgram'
import ProgramDetails from '../pages/programs/ProgramDetails'
import SubmitReport from '../pages/programs/SubmitReport'
import MyReports from '../pages/reports/MyReports'
import Dashboard from '../pages/dashboard/company_dashboard/Dashboard'
import ProgramsManagementPage from '../pages/companyPrograms/ProgramsManagementPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            {/* <Route path="/" element ={<DashMain/>}/> */}
            {/* <Route path="/" element ={<Dashboard/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/researcherdash' element={<DashMain/>}/>
            <Route path='/programs' element={<BrowserProgram/>}/>
            <Route path='/programs/:id' element={<ProgramDetails/>}/>
            <Route path='/submit-report/:id' element={<SubmitReport/>}/>
            <Route path='/reports' element={<MyReports/>}/> 
            <Route path="/companydash" element ={<Dashboard/>}/>
            <Route path='/companyprograms' element={<ProgramsManagementPage/>}/>


        </Routes>
    </BrowserRouter>
  )
}

export default Router