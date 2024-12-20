import { use100vh } from 'react-div-100vh';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Page404 } from './pages/Page404';
import { PageInformation } from './pages/PageInfomation';
import { PageManaging } from './pages/PageManaging';
import { PageRanking } from './pages/PageRanking';
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
    <BrowserRouter basename="/24-Gomsol-Frontend/">
      <Routes>
        <Route path="information" element={<PageInformation/>}></Route>
        <Route path="rules" element={<PageRules/>}></Route>
        <Route path="ranking" element={<PageRanking/>}></Route>
        <Route path="managing" element={<PageManaging/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
