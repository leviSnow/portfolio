import React, { Component } from 'react';
import './App.css';
import Top from './top';
import Footer from './footer';
import logo from './lwreal.png';
import $ from "jquery";
import homePic from '../images/home2.png';
import mobilePic from '../images/home.png';


class Home extends Component {
    
    componentDidMount() {
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
            $(window).scrollTop(0);
            $('body').addClass('stop-scrolling');
            setTimeout(function(){
                $('#welcome').fadeOut(5000);
            },1000);
            setTimeout(function(){
                $('body').removeClass('stop-scrolling');
            },2000);
        }
        
    }

    render() {
        const theHomePic =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? mobilePic : homePic;
        return (
            <div>
               <Top/>
               <div id="welcome">
                    style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her man lady women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids 
                    style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her man lady women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids 
                    style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her man lady women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids 
                    style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her man lady women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids 
                    style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her men women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice sharp style selection design price customer service trendy modern conservative kids adults his her man lady women chosson kallah anniversary birthday bris baby present graduation prizes service selection price nice style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids adults his her style selection design price customer service trendy modern conservative kids 
                    <div id="welcomeTo">
                        <h3>WELCOME TO</h3>
                        <img src={ logo } alt="Lakewood Watches logo"/>
                    </div>
                </div>
               
                 <div id="homeBodyDiv">
                     <h1>A Watch For Every Occasion</h1>
                     <img src={ theHomePic } alt="watch display"/>
                  </div>
                
                <Footer/>
            </div>
        );
    }
}

export default Home;
