import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/include/Header';
import Main from './components/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/project/:id' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
