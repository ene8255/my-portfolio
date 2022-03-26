import './App.css';
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/include/Header';
import DetailHeader from './components/include/DetailHeader';
import Main from './components/Main';
import Detail from './components/Detail';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScroll = (ref) => {
    const innerH = window.innerHeight;
    
    if(ref === aboutRef) {
      window.scrollTo(0, innerH);
    }else if(ref === skillsRef) {
      window.scrollTo(0, innerH * 2);
    }else {
      window.scrollTo(0, innerH * 3);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header handleScroll={handleScroll} refs={[aboutRef, skillsRef, projectsRef]} />}/>
        <Route path='/project/:id' element={<DetailHeader />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Main refs={[aboutRef, skillsRef, projectsRef]} />} />
        <Route path='/project/:id' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
