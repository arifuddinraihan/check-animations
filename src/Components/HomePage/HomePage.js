import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import './HomePage.css'


const HomePage = () => {

    return (
        <div className='flex flex-col justify-center'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Player src={'https://assets5.lottiefiles.com/packages/lf20_jkfnmn31.json'}
                        className="player"
                        loop
                        autoplay
                    ></Player>
                    <div className=''>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className=''>
            </div>
        </div>
    );
};

export default HomePage;