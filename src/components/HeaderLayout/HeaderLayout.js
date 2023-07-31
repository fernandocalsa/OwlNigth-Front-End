import { Outlet } from 'react-router-dom';
// TODO hacer un menu
import NavBar from '../NavBar/NavBar'
const HeaderLayout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);

export default HeaderLayout