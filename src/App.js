import logo from './logo.svg';
import './App.css';
import Landing_Page from './components/Landing_Page';
import PageLayout from './components/PageLayout';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className='wrapper'>
     
     
      <Routes>
        <Route path="/" element={<Landing_Page/>}/>
          <Route path='/posts' element={<PageLayout/>} />
          <Route path='/createpost' element={<CreatePost/>} />
          
      
      </Routes>
   
       
    </div>
  )
    
}

export default App;
