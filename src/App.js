import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from './components/HomePages/Main/HomePage';
import ProductPages from './components/ProductPages/Main/ProductPage';
import CartPages from './components/CartPages/Main/Cartpages';
import DetailPages from './components/DetailPages/Main/DetailPages';
import LoginPages from './components/Authencations/Main/LoginPages'
import RegisterPages from './components/Authencations/Main/RegisterPage'
import ProfilePages from './components/ProfilePages/Main/ProfilePages';
import PaymentPages from './components/PayMentPages/Main/PayMentPages';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<HomePages/>}></Route>
            <Route path='/products' element={<ProductPages/>}></Route>
            <Route path='/cart' element={<CartPages/>}></Route>
            <Route path='/detail/:id' element={<DetailPages/>}></Route>
            <Route path='/login' element={<LoginPages/>}></Route>
            <Route path='/register' element={<RegisterPages/>}></Route>
            <Route path='/profile' element={<ProfilePages/>}></Route>
            <Route path='/payment' element={<PaymentPages/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
