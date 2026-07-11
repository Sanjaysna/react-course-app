import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import AddCourse from './Components/AddCourse'
import ViewCourse from './Components/ViewCourse'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>

        

        <Routes>
          <Route path="/" element={<AddCourse />} />
          <Route path="/view" element={<ViewCourse />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App