import './App.css'
import Footer from './Component/Footer'
import Logo from './Component/Logo'
import Navbar from './Component/Navbar'
import {  BrowserRouter as Router,  Routes,  Route, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseHome from './Component/allcourses/CourseHome'

function AppContent() { 
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/service' element={<CourseHome />} />
      </Routes>
      {location.pathname !== '/service' && <Logo />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;