import { useState } from 'react';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { Routes, Route } from 'react-router-dom';
import Header from './components/include/Header';
import DetailHeader from './components/include/DetailHeader';
import Main from './components/Main';
import Detail from './components/Detail';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.color};
  }
`;

function App() {
  const [ isDarkModeOn, setIsDarkModeOn ] = useState(false);

  // isDarkModeOn의 상태를 바꿔주는 함수
  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  }

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path='/' element={<Header isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />}/>
          <Route path='/project/:id' element={<DetailHeader />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Main isDarkModeOn={isDarkModeOn} />} />
          <Route path='/project/:id' element={<Detail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
