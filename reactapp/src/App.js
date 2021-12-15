import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Section from './components/Section'
import MyFooter from './components/MyFooter'
import MyCarousel from './components/MyCarousel'
import { Jumbotron } from 'react-bootstrap'
import WarningSign from './components/WarningSign';
import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import scifi from './data/scifi.json'

function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <WarningSign text="This is a extremely dangerous Alert" />
      <Jumbotron>
        <h2>StriveBooks</h2>
        <p>Jumbotron</p>
      </Jumbotron>
      <MyCarousel />
      <Section title="Fantasy" theme={fantasy} slInitial={0} slFinal={4} />
      <Section title="History" theme={history} slInitial={0} slFinal={4} />
      <Section title="Horror" theme={horror} slInitial={0} slFinal={4} />
      <Section title="Sci-fi" theme={scifi} slInitial={0} slFinal={4} />
      <MyFooter />
    </div>
  );
}

export default App;
