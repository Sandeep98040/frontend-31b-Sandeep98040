import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

// For showing toast messages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile />} />

        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
        </Route>

        <Route element={<UserRoutes/>}>
          <Route path='/about' element={<AboutUs></AboutUs>}/>
          <Route path='/contact' element={<ContactUs></ContactUs>}/>
        </Route>

      </Routes>
    </Router>
  );
}


export default App;
