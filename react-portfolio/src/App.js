import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
