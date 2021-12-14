import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import MyCarousel from './components/MyCarousel'

function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <MyCarousel />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
