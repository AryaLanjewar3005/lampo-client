
import './App.css';
import Footer from './routes/footer/footer.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <div className=" ">
        <Navigation/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
