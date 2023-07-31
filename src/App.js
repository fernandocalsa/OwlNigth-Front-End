import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import LoginAndRegister from './containers/Login&RegisterForm/Login&Register';
import Home from './pages/HomePage/Home';
import Profile from './pages/UserProfilePage/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login&register" element={<LoginAndRegister />} />
          <Route element={<HeaderLayout />}>
          {/* A PARTIR DE AQUÍ LAS PÁGINAS SE MUESTRAN CON EL HEADERLAYOUT Y EL MENU PRINCIPAL DE LA PÁGINA */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<LoginForm />} />
          <Route path="/buypage" element={<BuyPage />} /> */}
          {/* <Route path="/library" element={<PlansLibrary />} /> */}
          {/* <Route path="/form" element={<FormUpload />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
