import logo from './logo.svg';
import './App.css';
import { SearchBar } from './Components/SearchBar';
import { SearchResults } from './Components/SearchResults';
import { PlayList } from './Components/PlayList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
          </div>
        </div>
      </div>
    )
  }
}

export default App;
