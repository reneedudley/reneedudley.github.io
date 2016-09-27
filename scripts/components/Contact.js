import React from'react';
import Rebase from're-base';
var base = Rebase.createClass('https://contact-5dcf5.firebaseio.com/');
import autobind from'autobind-decorator';

@autobind
export default class Contact extends React.Component{
    constructor(){
        super();
        this.state= {
            form: {},
        }
    }
    componentDidMount(){
        const timestamp = (new Date()).getTime();
        base.syncState(`${timestamp}/contact`, {
            context: this,
            state: 'form',
            asArray: true
        });
    }
    addOrderToState(completed){
        this.state.contactForm = completed;
        this.setState({form: this.state.contactForm});
    }
    createForm (event){
        event.preventDefault();
        var info = {
            name:this.refs.name.value,
            email:this.refs.email.value,
            message:this.refs.message.value,
        };
        this.addOrderToState(info);
        this.refs.contactfrom.reset();
    }
    render(){
        return(
            <div>
                <div className="parallax"><img src="./css/images/desk3.jpeg" alt="austin software developer" /></div>
                <div className="section no-pad-bot contact-header" >
                    <h1 className="con">Contact</h1>
                    <div className="direct">
                        <a className="links" href="mailto:4renee@gmail.com"><i className="fa fa-envelope" aria-hidden="true"/> Email </a>|| <a className="links" href="tel:+15128259843"><i className="fa fa-mobile" aria-hidden="true" /> Phone </a>|| <a className="links" href="https://github.com/reneedudley"><i className="fa fa-github" aria-hidden="true" /> Github</a> || <a className="links" href="https://twitter.com/4ReneeDudley"><i className="fa fa-twitter" aria-hidden="true" /> Twitter</a>
                    </div>

                    <div className="col s12 l4 center">
                        <form ref="contactfrom" onSubmit={this.createForm} id="contactForm">
                            <div className="input-field col s6 l4">
                                <input type="text" id="name" ref="name"/>
                                <label for="name"><i className="fa fa-user" aria-hidden="true"/> Name</label>
                            </div>
                            <div className="input-field col s6 l4">
                                <input type="text" ref="email" id="email" required/>
                                <label for="email"><i className="fa fa-envelope-o" aria-hidden="true"/> Email</label>
                            </div>
                            <div className="input-field col s6 l4">
                                <textarea id="textarea1" className="materialize-textarea" type="text" ref="message"/>
                                <label for="textarea1"><i className="fa fa-pencil-square-o" aria-hidden="true"/> Message</label>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" id="submitButton" name="action">Submit
                                <i className="fa fa-paper-plane" aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}