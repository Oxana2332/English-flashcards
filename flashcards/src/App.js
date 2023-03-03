import '../src/style/app.css';
import '../src/style/header.css'
import Footer from './components/Footer/Footer.jsx';
import { Route, NavLink, Routes } from 'react-router-dom';
import {Home, Game, Error} from './Pages'


function App() {

  return (
    <div className="App">
      <header className="header">
        <NavLink className="header_link" end to='/'>Home</NavLink>
        <NavLink className="header_link" end to='/'><img src='assets/logo.svg' alt='logo' /></NavLink>
        <NavLink className="header_link" end to='/game'>Game</NavLink>
      </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='*' element={<Error/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
