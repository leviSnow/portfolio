import React, { Component } from 'react';
import './App.css';
import Top from './top';
import Footer from './footer';


class Inventory extends Component {
   
    render() {
        return (
            <div>
               <Top/>
               <div className="bodyDiv">
                   
                        <h2>Our Collections</h2>
                        <div className="collectionCompany">Michele</div>
                        <div className="collectionCompany">Baume & Mercier</div>
                        <div className="collectionCompany">Frédérique Constant</div>
                        <div className="collectionCompany">Raymond Weil</div>
                        <div className="collectionCompany">Movado</div> 
                        <div className="collectionCompany">Ebel</div>
                        <div className="collectionCompany">Longines</div>
                        <div className="collectionCompany">Marc Jacobs</div>
                        <div className="collectionCompany">Concord </div>
                        <div className="collectionCompany">Bulova</div>
                        <div className="collectionCompany">Skagen</div>
                        <div className="collectionCompany">Tissot</div>
                        <div className="collectionCompany">Wittnauer</div>
                        <div className="collectionCompany">and many more...</div>
                   
                    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Inventory;
