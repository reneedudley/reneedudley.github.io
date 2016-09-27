import React from'react';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <div className="parallax"><img src="./css/images/desk.jpeg" alt="austin software developer" /></div>
                <div className="section no-pad-bot about-header" >
                    <img className="polariod" src="./css/images/polariod.png"/>
                    <h1 className="about">About</h1>
                </div>
                <div className="section about-text center">
                    <p className="about-p1">Once again, my name is Renee Dudley. I am from Austin Texas and like I tell my grandmother on occasion, I make
                    websites and apps look freaking sweet. I have been designing and developing websites, apps, and other digital products for over 3 years. And like so many developers, I started
                    programming because I needed to solve a problem. A social media client approached me at the time with not only a business issue, but a website issue.
                    Their website, gorgeous as it was, was completely useless on mobile browsers. They needed a quick fix and I volunteered my then, extremely limited
                    services, and a passion was made.</p>
                    <p className="about-p2">Because your time is valuable and I don't enjoy writing about myself in prose, below are some fun facts. </p>
                    <ul className="about-p3">
                        <li>My favorite things to work on are State Management and Testing</li>
                        <li>I really enjoy getting to work with Redux & Redux-Saga </li>
                        <li>Code Editor of Choice: Webstorm or Emacs</li>
                        <li>I have a good eye for design, however I wouldn't consider myself an expert designer. I'd rather be in the code.</li>
                        <li>I enjoy working on teams where code review and pairing is a regular process</li>
                        <li>In my spare time I run, do yoga, and make my own beer.</li>
                    </ul>
                </div>
            </div>
        )
    }
}