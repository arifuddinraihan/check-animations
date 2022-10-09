import { Outlet, useLoaderData } from 'react-router-dom';
import './Main.css'
import Header from '../Header/Header';
import { createContext } from 'react';

export const ProductsContext = createContext()

const Main = () => {
    const products = useLoaderData()
    return (
        <div className=''>
            <ProductsContext.Provider value={products}>
                <Header></Header>
                <Outlet></Outlet>
            </ProductsContext.Provider>
        </div>
    );
};

export default Main;