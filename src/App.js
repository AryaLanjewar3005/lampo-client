
import './App.css';
import SignInForm from './routes/auth/sign-in.component';
import SignUpForm from './routes/auth/sign-up.component';
import CheckOut from './routes/checkOutPage/check-out.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './routes/products-page/productsPage.component';
import Contact from './routes/contact/contact.component';

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='auth/signIn' element={<SignInForm/>} />
          <Route path='auth/signUp' element={<SignUpForm/>} />
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>

      </Routes>
        
        
    </div>
  );
}

export default App;
