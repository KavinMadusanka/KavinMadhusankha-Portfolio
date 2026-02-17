import './App.css'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './pages/loginPages/signIn.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Routes>
          <Route path='/signin' element={<SignIn />} />

        </Routes>
      </div>
    </>
  )
}

export default App;
