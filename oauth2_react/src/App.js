import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Redirect from './components/Redirect';
import Home from './components/Home';

function App() {
  const home = '/home';
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/authorized" element={<Redirect link={ home } />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
