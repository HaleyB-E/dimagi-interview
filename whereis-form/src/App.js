import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from './pages/homepage.tsx';
import Form from './pages/form.tsx'
import List from './pages/list.tsx'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;