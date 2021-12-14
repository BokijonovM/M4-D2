import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import MyCarousel from './components/MyCarousel'
import { Jumbotron } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <Jumbotron>
        <h2>StriveBooks</h2>
        <p>Jumbotron</p>
      </Jumbotron>
      <MyCarousel />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
