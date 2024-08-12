import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navs from './components/Navs/Navs';
function App() {
  
  return (
    <Router>
      <Navs/> 
       <Routes>
       <Route path="/" element={<Home/>} />
    </Routes>
    </Router>
  )
}


export default App;
