import IndexPage from './pages/index';
import Day1Page from './pages/day1';
import D1231Page from './pages/d1231';
import D0108Page from './pages/d0108';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage/>} exact/>
          <Route path='/day1' element={<Day1Page/>} exact/>
          <Route path='/d1231' element={<D1231Page/>} exact/>
          <Route path='/d0108' element={<D0108Page/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
