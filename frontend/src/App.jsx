import './App.css'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './pages/loginPages/signIn.jsx';
import ForgetPassword from './pages/loginPages/ForgetPassword.jsx';
import VerifyCode from './pages/loginPages/VerifyCode.jsx';
import ResetPassword from './pages/loginPages/ResetPassword.jsx';
import HomeView from './pages/homePages/HomeView.jsx'
import ProjectListing from './pages/projectListingPages/ProjectListing.jsx';
import TechnicalSkillPage from './pages/skillPages/TechnicalSkillPage.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/verify-code' element={<VerifyCode />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/home' element={<HomeView />} />
          <Route path='/projects' element={<ProjectListing />} />
          <Route path='/skills' element={<TechnicalSkillPage />} />


        </Routes>
      </div>
    </>
  )
}

export default App;
