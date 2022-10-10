import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card/Card';
import { ProductsContext } from '../Layout/Main';
import './Shop.css'


const Shop = () => {
    const products = useContext(ProductsContext)
    const addToCart = () => {
        toast.info('Product Added!', {autoClose: 500})
        console.log("btn click")
    };
    return (
        <div className='text-center my-4'>
            <h2 className='text-bold text-lg md:text-2xl'>Check out this Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8'>
                {
                    products.map(product => <Card 
                        key={product.id} 
                        addToCart={addToCart}
                        product={product}>
                        
                        </Card>)
                }
            </div>
        </div>
    );
};

export default Shop;