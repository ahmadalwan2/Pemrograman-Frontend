import './App.css'
import Home from './Pages/Home/Home.jsx';
import Blogs from './Pages/Blog/Blog.jsx';
import About from './Pages/About/About.jsx';
import DetailBlog from './Pages/DetailBlog/DetailBlog';
import ErrorPage from './Components/Error/Error.jsx';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post" element={<Blogs/>}/>
          <Route path="/post/:id" element={<DetailBlog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default App;
