import { use100vh } from 'react-div-100vh';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Page404 } from './pages/Page404';
import { PageInformation } from './pages/PageInfomation';
import { PageRanking } from './pages/PageRanking';
import { PageReserve } from './pages/PageReserve';
import { PageRules } from './pages/PageRules';

const Global = createGlobalStyle`
  body {
    background-color: #000062;
  }

  * {
    font-family: "Orbit", sans-serif;
  }
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
        <Route path="ranking" element={<PageRanking/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
