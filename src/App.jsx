import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/tailwindcss.css';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './views/Home';
import Contact from './views/Contact';
import PowerParentingStrategy from './views/Power_parenting_strat';
import ScheduleServices from './views/Schedule_services';
import Shops from './views/Shops';  
import ParentingTools from './views/Parenting_tools';
import Frameworks from './views/Frameworks';
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/power-parenting" element={<PowerParentingStrategy />} />
          {/* removes power parenting strategies to power parenting */}
          <Route path="/parents-in-action" />
          <Route path="/frameworks" element={<Frameworks />} />
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
