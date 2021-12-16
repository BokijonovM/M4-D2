import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Section from './components/Section'
import MyFooter from './components/MyFooter'
import MyCarousel from './components/MyCarousel'
import { Jumbotron, Button } from 'react-bootstrap'
import MainContent from './MainContent';


function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <Jumbotron style={{
        color: "white",
        backgroundImage: 'url(' + "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" + ')',
        backgroundSize: "cover",
      }}>
        <h1>Regular, Jumbotron!</h1>
        <p>
          This is a simple Jumbotron example.
        </p>

        <p>
          <Button variant="primary">
            Primary Button
          </Button>
        </p>
      </Jumbotron>
      <MyCarousel />
      <MainContent />
      <MyFooter />
    </div>
  );
}

export default App;
