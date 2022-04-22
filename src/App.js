import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom'
import EventDetails from './pages/eventDetails/EventDetails';
import AddEvent from './pages/addEvent/AddEvent';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import UpdateEvent from './pages/updateEvent/UpdateEvent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event-detail/:id' element={<EventDetails />} />
        <Route path='/add-new-event' element={<AddEvent />} />
        <Route path='/update-event/:id' element={<UpdateEvent />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
