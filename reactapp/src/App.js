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
        color: "black",
        backgroundImage: 'url(' + "https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Chicago_Skyline_LinkedIn_Background_Photo.png?v=1627912075" + ')',
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
