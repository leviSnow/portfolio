import React, { Component } from 'react';
import './App.css';
import Top from './top';
import Footer from './footer';
import PictureChanger from './pictureChanger';


class Services extends Component {
   
    render() {
        return (
            <div>
               <Top/>
               <div className="bodyDiv">
                   <div id="mainLeft">
                        <div id="servicesDiv">
                            <h2>Services</h2>
                            <h4>Full scale repair shop</h4>
                            <ul>
                                <li>Batteries for any watch brand</li>
                                <li>Movements</li>
                                <li>New crystals</li>
                                <li>Replacement bands</li>
                                <li>Stem and crowns</li>
                                <li>Replacement clasps</li>
                                <li>and more...</li>
                            </ul>
                        </div>
                    </div>
                    <PictureChanger/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Services;
