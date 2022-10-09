import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import './HomePage.css'


const HomePage = () => {

    return (
        <div className='mx-auto flex flex-col justify-center bg-transparent'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Player src={'https://assets5.lottiefiles.com/packages/lf20_jkfnmn31.json'}
                        className="player"
                        loop
                        autoplay
                    ></Player>
                    <div className=''>
                        <h1 className="text-5xl font-bold mt-4 lg:mt-0">Check this Animation!</h1>
                        <p className="py-6">Our animation community is vast with
                            <span className='px-2 text-red-600 text-2xl'>160K</span> people!</p>
                        <div className=' flex gap-3'>
                            <button className="btn btn-primary">Join Now</button>
                            <button className="btn btn-ghost">See More...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                
            </div>
        </div>
    );
};

export default HomePage;