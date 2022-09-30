
import './App.css';
import Navbar from './Components/Navbar';
import Topnews from './Components/Topnews';
import Sidebar from './Components/Sidebar';
import Allroutes from './Pages/AllRoutes';
import Rightbar from './Components/Rightbar';
import {Flex} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
     <Navbar/>
    
     <Topnews/>

     <Flex>
     <Sidebar/>
     <Allroutes/>
     <Rightbar/>
     
      </Flex>
     
    </div>
  );
}

export default App;
