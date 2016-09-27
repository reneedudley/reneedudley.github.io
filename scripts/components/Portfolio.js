import React from'react';

export default class Portfolio extends React.Component{
    render(){
        return(
            <div>
                <div className="parallax"><img src="./css/images/desk4.jpeg" alt="austin software developer" /></div>
                <div className="section no-pad-bot port-header" >
                    <h1 className="port">Portfolio</h1>
                </div>
                <div className="section port-text center">
                    <p>*Quick Note* Below are a description of some of the projects that I have worked on or am currently working on.
                        As much as I would like to show all the sites and apps that I have worked on, I afford all of my clients the right to choose if their sites are displayed here.
                        If you would like to see more examples, please contact me <a href="">here</a>.
                        Some projects do not have links because of required authentication or payment to access the app. Carry on.
                    </p>
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col s12 l4 center">
                            <div className="card small ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="./css/images/leaf.jpg" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Leaf<i className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><a href="https://leaf.ag/">Leaf</a><i className="material-icons right">close</i></span>
                                    <p>As a software Engineer at leaf, my role was to implement new features, api enpoints, and systems on the frontend.
                                    I worked daily with React, Redux, Redux-Saga, Leaflet, as well as with many testing suites.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l4 center">
                            <div className="card small ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="./css/images/FSG.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">FSG<i className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><a href="https://www.fsgenergy.com/">FSG Energy</a><i className="material-icons right">close</i></span>
                                    <p>My main role for this site was designing and developing a custom Squarespace template for the splash page.
                                    The page has custom Jquery integration, SASS, and Javascript plugins. I also implemented the state management system using
                                    Redux, for the user console.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 l4 center">
                            <div className="card small ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="./css/images/fairprice.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">FairPrice<i className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><a href="http://www.fairprice.network">FairPrice</a><i className="material-icons right">close</i></span>
                                    <p>My main role for this site was implementing a whole site re-design on the frontend. I used php, laravel, and custom jquery apps to implement the given designs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row center">
                        <p className="built">Want to see how this site was built? Check out the console or my <a>github</a></p>
                    </div>
                </div>
            </div>
        )
    }
}