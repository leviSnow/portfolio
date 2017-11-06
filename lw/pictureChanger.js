import React, { Component } from 'react';
import './App.css';
import w1 from '../images/hl1.png';
import w2 from '../images/hl2.png';
import w3 from '../images/hl3.png';
import w4 from '../images/lw11.png';
import w5 from '../images/hl10.png';
import w6 from '../images/lw10.png';
import $ from "jquery";

class PictureChanger extends Component {
   componentDidMount() {
        $('#spot1').css('zIndex',996);
        $('#spot2').css('zIndex',997);
        $('#spot3').css('zIndex',998);
        $('#spot4').css('zIndex',999);
        $('#spot5').css('zIndex',1000);
        $('#spot6').css('zIndex',1001);
        
        let i = 995;
        setInterval(function(){
                if(i%6===0){
                    $('#spot1').fadeOut(4000);
                    $('#spot2').show().css('zIndex',i);
                }else if(i%6===1){
                    $('#spot2').fadeOut(4000);
                    $('#spot3').show().css('zIndex',i);
                 }else if(i%6===2){
                    $('#spot3').fadeOut(4000);
                    $('#spot4').show().css('zIndex',i);
                }else if(i%6===3){
                     $('#spot4').fadeOut(4000);
                     $('#spot5').show().css('zIndex',i);
                }else if(i%6===4){
                    $('#spot5').fadeOut(4000);
                    $('#spot6').show().css('zIndex',i);
                }else{
                     $('#spot6').fadeOut(4000); 
                     $('#spot1').show().css('zIndex',i);
                }
                 i--;
                 if(i===0){
                    $('#spot1').css('zIndex',996);
                    $('#spot2').css('zIndex',997);
                    $('#spot3').css('zIndex',998);
                    $('#spot4').css('zIndex',999);
                    $('#spot5').css('zIndex',1000);
                    $('#spot6').css('zIndex',1001);
                    
                    i = 995;
                 }
        },6000);
   
    }

    componentWillUnmount() {
    //clearInterval(this.timerID);
    
   }
    
    render() {
        return (
            <div id="mainRight">
                <div className="mobileNone spotsBox">
                    <div id="spot0" className="spots"></div>
                    <div id="spot1" className="spots"><img src={ w1 } alt="a watch"/> </div>
                    <div id="spot2" className="spots"><img src={ w2 } alt="a watch"/> </div>
                    <div id="spot3" className="spots"><img src={ w3 } alt="a watch"/> </div>
                    <div id="spot4" className="spots"><img src={ w4 } alt="a watch"/> </div>
                    <div id="spot5" className="spots"><img src={ w5 } alt="a watch"/> </div>
                    <div id="spot6" className="spots"><img src={ w6 } alt="a watch"/> </div>
                </div>
            </div>
        );
    }
}

export default PictureChanger;
