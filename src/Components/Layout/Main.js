import { Outlet } from 'react-router-dom';
import './Main.css'
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;