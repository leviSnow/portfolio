import React, { Component } from 'react';
import './App.css';
import Top from './top';
import Footer from './footer';
import PictureChanger from './pictureChanger';

class Contact extends Component {
    
    render() {
        return (
            <div>
               <Top/>
               <div className="bodyDiv">
                   <div id="mainLeft">
                        <h2>Contact Us:</h2>
                        <div className="contactUsDiv">
                            <div className="contactInfo">
                                <h5>Phone:</h5>
                                732-312-8696
                            </div>
                            <div className="contactInfo">
                                <h5>Email:</h5>
                                sales@lakewoodwatches.com
                            </div>
                        </div>
                   </div>
                   <div id="mainRight">
                         <PictureChanger/>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;
