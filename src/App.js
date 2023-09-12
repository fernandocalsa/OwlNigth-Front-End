import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import Home from './pages/HomePage/Home';
import Locals from './pages/LocalsPage/LocalsPage';
import FormUpload from './containers/FormUpload/FormUpload';
import LoginPage from './pages/Login&RegisterPage/Login&RegisterPage';
import Profile from './pages/UserProfile/UserProfile';
import UserLibraryPage from './pages/UserLibraryPage/UserLibraryPage';
import { AuthProvider } from './connect/AuthContext/AuthContext';
import { DateProvider } from './components/DateContext/DateContext'; // Importa el proveedor de contexto
import BookingPage from './pages/BookingsPage/BookingsPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <DateProvider>
          <Routes>
            <Route path="/login&register" element={<LoginPage />} />
            <Route path="/form" element={<FormUpload />} />
            <Route element={<HeaderLayout />}>
              {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
              <Route path="/locals" element={<Locals />} />
              <Route path="/" element={<Home />} />
              <Route path="/user-profile" element={<Profile />} />
              <Route path="/library" element={<UserLibraryPage />} />
              <Route path="/booking/:localId" element={<BookingPage />} />
              TODO
              {/* <Route path="/" element={<ProManagerHome />} /> */}
            </Route>
          </Routes>
          </DateProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
