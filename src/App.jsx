import './App.css';
// import Mid from './Component/Mid';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Login from "./LoginSignup/Login"
// import SignUp from "./LoginSignup/SignUp"
// import Home from './Home';
// import Home from "./Componentss/Home/Home"
import Login from './Componentss/Login/Login';
import Signup from './Componentss/SignUp/Signup';
import Home from './Componentss/Home/Home';
import Mens from './Collection/Mens/Mens';
import Display from './DisplayItems/Display';
import Cart from './Cartss/Cart';
import { useState } from 'react';
import { LevelContext } from './Context/LevelContext';




function App() {

  const [showNum, setShowNum] = useState(1)
  const [first, setfirst] = useState('hello')
  const [num, setNum] = useState(1);

  return (
    //  <h1>hello</h1>
    <>
      {/* <AuthProvider> */}

      {/* <cartValue.Provider value="">
  <Cart />
</cartValue.Provider> */}

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/SignUp' element={<Signup />} />

          <Route exact path='/Mens' element={<Mens />} />

          <Route path="/products/:productId" element={<Display />} />

          <Route path='/Carts' element={<Cart />} />


        </Routes>
      </Router>

      <LevelContext.Provider value={{ showNum, first, num, setNum, setShowNum }} >
        {num > 0 && <Cart />}
      </LevelContext.Provider>

      {/* </AuthProvider> */}

    </>
  );
}

export default App;
