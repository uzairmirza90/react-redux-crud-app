import './App.css';
import Home from './pages/home/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import EventDetails from './pages/eventDetails/EventDetails';
import AddEvent from './pages/addEvent/AddEvent';
import UpdateEvent from './pages/updateEvent/UpdateEvent';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';

function App() {
  const [user] = useAuthState(auth)

  const Layout = ({ children }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <>
      <Layout>
        <Routes>
          {user ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/event-detail/:id' element={<EventDetails />} />
              <Route path='/add-new-event' element={<AddEvent />} />
              <Route path='/update-event/:id' element={<UpdateEvent />} />
            </>
          )
          : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </>
          )
          }

          <Route path='*' element={<Navigate to={user ? '/' : '/login'} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
