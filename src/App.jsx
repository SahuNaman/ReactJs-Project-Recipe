import logo from './logo.svg';
import './App.css';
import Home from './pages/Home' 
import About from './pages/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Singler from './pages/Singler';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/single' element={<Singler/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/Navbar' element={<Navbar/>}/> */}
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
