import logo from './logo.svg';
import './App.css';
import Screen from './components/Screen'
// import Navigation from './components/Navigation'
// import ProfilePg from './components/ProfilePg'
import MainBoard from './components/MainBoard'
import TopNavigation from './components/TopNavigation';
import Tabs from './components/Tabs'
import LogInpg from './components/LogInpg';
import SignUp from './components/SignUp';
import Portfolio from './components/Portfolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tabs/>} />
        <Route path="/Screen" element={<Screen/>} />
        <Route path="/TopNavigation" element={<TopNavigation/>} />
        <Route path="/MainBoard" element={<MainBoard/>} />
        <Route path="/LogInpg" element={<LogInpg />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Portfolio" element={<Portfolio/>} />      
      </Routes> 
    </BrowserRouter>  
      
    </div>
  );
}

export default App;
