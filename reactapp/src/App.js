import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Section from './components/Section'
import MyFooter from './components/MyFooter'
import MyCarousel from './components/MyCarousel'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import WarningSign from './components/WarningSign';
import Search from './components/Search';
import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import scifi from './data/scifi.json'

function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <WarningSign text="This is a extremely dangerous Alert" />
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
      <Search title="Search" theme={fantasy} />
      <Section title="Fantasy" theme={fantasy} slInitial={0} slFinal={4} />
      <Section title="History" theme={history} slInitial={0} slFinal={4} />
      <Section title="Horror" theme={horror} slInitial={0} slFinal={4} />
      <Section title="Sci-fi" theme={scifi} slInitial={0} slFinal={4} />
      <MyFooter />
    </div>
  );
}

export default App;
