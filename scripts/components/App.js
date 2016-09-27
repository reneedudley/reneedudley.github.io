// app component //
import React from 'react';

import helpers from'../helpers';


class Home extends React.Component{

    render () {
        return (
        <div>
            <div className="parallax"><img src="./css/images/desk.jpeg" alt="austin software developer" /></div>

            <div className="section no-pad-bot" >
                <div className="home-background">
                    <h1 className="greeting">{helpers.getFunGreeting()}!</h1>
                    <h3 className="tagline">I'm Renee & I'm a Front-End Software Developer from Austin Texas.</h3>
                    <h5 className="beach">I enjoy long walks on the beach, listening to 90s music while I code, & starting my morning with fresh hot coffee.</h5>
                </div>
            </div>

        </div>
        )
    }
}

export default Home;