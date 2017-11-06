<?php
    require 'topPage.php';
?>
    
    <div id="findAmud"> 
        <div id="modular"> </div>
        <form id="mesechtaForm"action="#">
            <h1>Find Another Amud</h1>
            <div class="formDiv">
                <label for="mesechta">Mesechtas:</label>
                <div class="selectContainer">
                    <select id="selectMesechta"></select> 
                </div>
            </div>
            <div class="formDiv">
                <label for="daf">Daf:</label> 
                <div class="selectContainer">  
                    <select id="selectDaf"></select>
                </div>
            </div>
            <div class="formDiv">
                <label for="amud">Amud:</label>
                <div class="selectContainer">   
                    <select id="selectAmud">
                        <option value='a'>עמוד א</option>
                        <option value='b'>עמוד ב</option>
                    </select> 
                </div> 
            </div>
            <div class="formDiv">
                <div id="okFind">Find</div>
                <div id="cancelFind">Cancel</div>
            </div>
        </form>    
    </div>
    
    <div id="amudLocation">
        <div id="bodyRight">
            <div id="todaysAmud">
                <h4>Todays Amud:</h4>
            </div>
            <div id="download" class="download">
                <h4>Download</h4>
                <h5>(Hebrew Books)</h5>
            </div>
            <div id="displayFind">
                <h4>Find A Different</h4>
                <h4>Amud</h4>
            </div>
            <div id="signUp" class="noMobile">
                <h4>SIGN UP NOW TO RECEIVE</h4>
                <h4>THE NEW AMUD YOMI CALENDAR</h4>
                <h4>TO YOUR INBOX EVERY YEAR</h4>
                <a href="contact.php">SIGN UP!</a>
            </div>
            <div class="sponsorDiv noMobile">
                <h3>THE AMUD YOMI</h3>
                <h3>WEBSITE SPONSORED</h3>
                <h3 class="hebrewFont">לעי"נ מלכה בת קלונימוס ע"ה </h3> 
                <div class="nail" id="nailTR"></div>  
                <div class="nail" id="nailTL"></div>  
                <div class="nail" id="nailBR"></div>  
                <div class="nail" id="nailBL"></div>  
            </div>
            <div class="sponsorDiv noMobile">
                <h4>The Amud of gemara was provided by:</h4>
                <!--<iframe name="I1" src="edaf.php" width="215" height="60" scrolling="no" id="edafIframe">
                    <img border="0" src="edafImg.php" width="150" height="60" alt="Click here to visit E-Daf.com"></a>
                </iframe>-->
                <div id="edafLeft">
                    <img src="images/e-daf_logo_black_91x58.gif"/>
                </div>
                <div id="edafCenter">
                    <h6><i>Today's Daf...</i></h6>
                    <select id="edafMesechta"> </select>
                    <div id="edafLine3">
                        <select id="edafDaf"> </select>
                        <button id="edafGo">GO</button>
                    </div>
                </div>
                
                <div class="nail" id="nailTR"></div>  
                <div class="nail" id="nailTL"></div>  
                <div class="nail" id="nailBR"></div>  
                <div class="nail" id="nailBL"></div>  
            </div>
        </div>
        <div id = "bodyLeft">
            <div id="amudControls">
                <div id="prevAmud"> << </div>
                <div id="thisAmud" class="hebrewFont"><span id="onStart">amud yomi</span></div>
                <div id="nextAmud"> >> </div>
            </div>
            <div id="imgDiv">
                <img id="theImgDaf" src="#" alt="image of the amud"/>
            </div>
        </div> 
    </div>
    <div id="mobileSignUp"class="noDesktop">
        
        <h6>The Amud of gemara was graciously provided by:</h6>
        <iframe name="I1" src="edaf.php" width="285" height="60" scrolling="no">
            <img border="0" src="edafImg.php" width="150" height="60" alt="Click here to visit E-Daf.com"></a>
        </iframe>

    </div>
    <div id="sponsorDivMobile" class="noDesktop">
        <h3>WEBSITE SPONSORED</h3>
        <h3 class="hebrewFont">לעי"נ מלכה בת קלונימוס ע"ה </h3> 
    </div>
    <footer>
        <div>
            Copyright &copy; 2017 Amud Yomi
        </div>
        Website designed and developed by <a href="http://www.lysportfolio.com">Levi Snow</a>
     </footer>

    <script src="hebcal.js"></script>
    <!--<script src="/jquery-3.1.1.min.js"></script>-->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <script src="hebcal2.js"></script>
    <script src="edaf.js"></script>
</body>
</html>