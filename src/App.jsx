import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/tailwindcss.css';
import Layout from './components/Layout';
import Home from './views/home';
import Contact from './views/Contact';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
