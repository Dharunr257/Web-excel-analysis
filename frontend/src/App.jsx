import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Analyze from './pages/Analyze';
import Navbar from './components/layout/Navbar';
import RequireAuth from './components/auth/RequireAuth';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <RequireAuth> <Dashboard/> </RequireAuth>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<RequireAuth><Profile /> </RequireAuth>} />
        <Route path="/analyze/:id" element={ <RequireAuth> <Analyze /> </RequireAuth>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
