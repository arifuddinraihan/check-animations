import React from 'react';

const Card = ({product , addToCart}) => {
    const {name, price, picture, category} = product;
    
    return (
        <div className="card w-4/5 md:w-2/3 lg:w-96 h-fit bg-base-100 shadow-xl">
            <figure><img src={picture} alt={name} className="object-contain h-full w-full rounded-lg"/></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{name ? name.slice(0, 20) : "N/ A"}</h2>
                <p>{category}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => addToCart(product)}
                    className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;