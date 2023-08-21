import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import LoginAndRegister from './containers/Login&RegisterForm/Login&Register';
import Home from './pages/HomePage/Home';
import Locals from './pages/LocalsPage/LocalsPage';
import FormUpload from './containers/FormUpload/FormUpload';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login&register" element={<LoginAndRegister />} />
          <Route element={<HeaderLayout />}>
          {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
          <Route path="/locals" element={<Locals />} />
          <Route path="/" element={<Home />} />

          TODO 
          {/* <Route path="/" element={<ProManagerHome />} /> */}

          <Route path="/form" element={<FormUpload />} />          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
