import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home/>
    </div>
  );
}

export default App;
