
import './App.css';
import Navbar from './Components/Navbar';
import Topnews from './Components/Topnews';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Topnews/>
     <Sidebar/>
    </div>
  );
}

export default App;
