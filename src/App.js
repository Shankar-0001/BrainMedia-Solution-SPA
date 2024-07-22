import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Services } from './components/services';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { About } from './components/about';
import { Home } from './components/home';
import { Menu } from './components/menu';
// import * as bootstrap from 'bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Menu />
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
