import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from './pages/List';
import Profile from './pages/Profile';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<List></List>}></Route>
        <Route path='/:id' element={<Profile></Profile>}></Route>

      </Routes>
    </BrowserRouter>
)
}

export default App
