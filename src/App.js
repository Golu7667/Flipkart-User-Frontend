
import Header from './components/Header';
import HomePage from './containers/HomePage';
import { Routes,Route } from 'react-router-dom';
import ProductListPage from './containers/ProductListPage';

function App() {
  return (
    <div className="App">
     <Routes>
         <Route  path='/' element={<HomePage/>}/>
         <Route path='/:slug' element={<ProductListPage props='props'/>}/>
     </Routes>
    
    <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2JzwqO"></path></svg>
    </div>
  );
}

export default App;
