import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudentTable from "./StudentTable"
import CreateStudent from "./CreateStudent"
import EditStudent from "./EditStudent"
import ViewStudent from "./ViewStudent"

import Home from "./Home"
import Create from "./Create"
import Read from "./Read"
import Update from "./update";

import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    // <h1>Hello Word</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentTable/>}></Route>
      <Route path="/student/create" element={<CreateStudent/>}></Route>
      <Route path="/student/edit/:studentId" element={<EditStudent/>}></Route>
      <Route path="/student/view/:studentId" element={<ViewStudent/>}></Route>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
      <Route path="/Read/:id" element={<Read/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
