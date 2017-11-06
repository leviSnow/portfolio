import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './lwreal.png';


class Footer extends Component {
    
    render() { 
        
    

        return (
            <div>
                <footer>
                    <div id="theFooterDiv">
                        <div  className="footerDivOne">
                            <div id="siteMap">
                                Site Map
                            </div>
                            <ul>
                                <Link className="footerLi" to="/">Home</Link>
                                <Link className="footerLi" to="/inventory">Our Collections</Link>
                                <Link className="footerLi" to="/services">Services</Link>
                                <Link className="footerLi" to="/chosson">Chosson Gallery</Link>
                                <Link className="footerLi" to="/kallah">Kallah Gallery</Link>
                                <Link className="footerLi" to="/contact">Contact Us</Link>
                                <Link className="footerLi" to="/about">About Us</Link>
                            </ul>
                        </div>
                        <div id="copyright"  className="footerDivTwo">
                            <img src={ logo } alt="stores logo"/>
                            <h3>Copyright &copy; 2017 by Lakewood Watches</h3>
                            <h3>Website designed and developed by <a href="https://lysportfolio.com">Levi Snow</a></h3>
                            
                        </div>
                    </div>
                </footer>
            </div>
        );
        
    }
    
}

export default Footer;