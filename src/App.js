import Header from './components/Header';
import CustomerData from './components/CustomerData'
import Main from './components/Main';
import OrderTable from './components/OrderTable';
import {customerDetails} from './Data/data'
import './styles/main.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header customer = "Anna Anne (19901230-4567)"/>
        <CustomerData customerData={customerDetails}/>
        <Main/>
        <OrderTable/>
      </header>
    </div>
  );
}

export default App;
