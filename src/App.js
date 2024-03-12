import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route excat path='/' element={<Home/>}></Route>
          <Route excat path='/adduser' element={<AddUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
