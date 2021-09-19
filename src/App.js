import Header from './components/Header';
import Main from './components/Main';
import {customer} from './Data/data'
import './styles/main.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header customerInfo = "Anna Anne (19901230-4567)"/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
