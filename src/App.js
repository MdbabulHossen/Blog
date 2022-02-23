import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import About from './Components/Pages/About/About'
import Elements from './Components/Pages/Elements/Elements.jsx';
import Archive from './Components/Pages/Archive/Archive'
import Contact from './Components/Pages/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/FooterJoin.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/elements' element={<Elements />} />
    <Route path='/archive' element={<Archive />} />
    <Route path='/contact' element={<Contact />} />



    </Routes>
    <Footer />
    </BrowserRouter>




    
</>
)}
export default App;
