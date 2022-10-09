import React from 'react';

const Card = ({product}) => {
    const {title, price, description, image} = product;
    return (
        <div className="card w-4/5 md:w-2/3 lg:w-96 h-fit bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="object-contain h-48 w-96"/></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title ? title.slice(0, 20) : "N/ A"}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;