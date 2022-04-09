import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        } />
        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        } />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
