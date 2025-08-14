import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Admin from './component/Admin'
import Student from './component/Student'
import StudentsView from './component/Showstudent'
import Deletestudent from './component/Delete'
import EditStu from './component/Editstudent';
import AdminsView from './component/Showadmin'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/register' element={<Registration></Registration>}></Route>
      <Route path='/student' element={<Student></Student>}></Route>
      <Route path ="/Admin" element={<Admin></Admin>}></Route>
      <Route path='/viewstudents' element={<StudentsView></StudentsView>}></Route>
    <Route path='/editstudent/:id' element={<EditStu />} />
      <Route path='/delete/:id' element={<Deletestudent></Deletestudent>}></Route>
      <Route path='/viewadmins' element={<AdminsView></AdminsView>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
