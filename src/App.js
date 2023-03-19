import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogue from './pages/Catalogue';
import Erorr from './pages/Erorr';
import Home from './pages/Home';
import Share from './pages/Share';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Share />}>
          <Route path='/' index element={<Home />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/catalogue/:productID' element={<SingleProduct />} />
        </Route>
        <Route path='*' element={<Erorr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
