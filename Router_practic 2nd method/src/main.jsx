
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard/Dashboard'
import Teacher from './pages/Dashboard/Teacher'
import Admain from './pages/Dashboard/Admain'
import Student from './pages/Dashboard/Student'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



createRoot(document.getElementById('root')).render(
 
<BrowserRouter>

  <Navbar/>

    <Routes>
      <Route index element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='services' element = {<Services/>}/>
      {/* parent Route */}
      <Route path='dashboard' element = {<Dashboard/>}>
        <Route index element = {<Admain/>}/>
        <Route path='teacher' element = {<Teacher/>}/>
        <Route path='student' element = {<Student/>}/>

      </Route>

    </Routes>

  <Footer/>

</BrowserRouter>

)
