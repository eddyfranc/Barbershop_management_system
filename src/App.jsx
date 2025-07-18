import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Pages from './Components/Pages';
import Services from './Components/Services';




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* to add blogs section */}
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App