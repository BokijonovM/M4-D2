import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <MyNav payoff="Read, Learn and Enjoy!" />
      <Home />
    </div>
  );
}

export default App;
