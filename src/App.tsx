import { use100vh } from 'react-div-100vh';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import { Page404 } from './pages/Page404';
import { PageInformation } from './pages/PageInfomation';
import { PageReserve } from './pages/PageReserve';
import { PageRules } from './pages/PageRules';

const Global = createGlobalStyle`
  body {
    background-color: #000062;
    font-family: "Orbit", sans-serif;
  }
`

const Frame = styled.div`
  display: flex;
  height: 100%;
`

function App() {
  use100vh()
  return <>
    <Global/>
    <BrowserRouter>
      <Routes>
        <Route path="information" element={<PageInformation/>}></Route>
        <Route path="rules" element={<PageRules/>}></Route>
        <Route path="reserve" element={<PageReserve/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
