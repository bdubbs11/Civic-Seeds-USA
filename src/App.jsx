import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/tailwindcss.css';
import Layout from './components/Layout';
import Home from './views/home';
import Contact from './views/Contact';
import PowerParentingStrategy from './views/Power_parenting_strat';
import ScheduleServices from './views/Schedule_services';
import Shops from './views/Shops';  
import ParentingTools from './views/Parenting_tools';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/power-parenting-strategies" element={<PowerParentingStrategy />} />
          <Route path="/schedule-services" element={<ScheduleServices />} />
          <Route path="/parenting-tools" element={<ParentingTools />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
