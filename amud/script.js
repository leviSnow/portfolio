(function () {
    'use strict';

    var usersMesechta,
        usersAmud,
        usersDaf,
        usersArray,
        skekalimHB,
        mesechtaNumber,
        switchToMesechta,
        options,
        isMobileNav = false,
        thisAmud = $('#thisAmud'),
        theImgDaf= $('#theImgDaf'),
        selectAmud = $('#selectAmud'),
        selectMesechta =$('#selectMesechta'),
        selectDaf =$('#selectDaf'),
        today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth(),
        yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var hebDay = new Hebcal.HDate(new Date(yyyy, mm, dd)),
        dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Motzei Shabbos"],
        monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        mesecta = ["ברכות", "שבת", "עירובין", "פסחים", "שקלים", "יומא", "סוכה", "ביצה", "ראש השנה", "תענית", "מגילה", "מועד קטן", "חגיגה", "יבמות", "כתובות", "נדרים", "נזיר", "סוטה", "גיטין", "קידושין", "בבא קמא",
            "בבא מציעא", "בבא בתרא", "סנהדרין", "מכות", "שבועות", "עבודה זרה", "הוריות", "זבחים", "מנחות", "חולין", "בכורות", "ערכין", "תמורה", "כריתות", "מעילה", /*"קנים"*/"תמיד",/*"מדות",*/"נדה"],
        edaf = [125,312,207,240,42/*shekalim bavli edition*/,173,110,78,68/*edaf adds page*/,59,61,55,51,242,222,180,130,96,178,162,236,235,350,224,46,96,150,25,238,217,281,119,65,65,54,41,6/*kinim not learnt*/,17/*tamid learnt but actual amudim*/,8/*middos*/,143];
    
    function mesechtaObjectFinder(elem) {
        switch (elem){
            case "ברכות": return { "e": "Berachos", "h": "ברכות", 'daf': 125, "num":1};
            case "שבת": return { "e": "Shabbos", "h": "שבת", 'daf': 312, "num":2  };
            case "עירובין": return { "e": "Eruvin", "h": "עירובין", 'daf': 207, "num":3};
            case "פסחים": return { "e": "Pesachim", "h": "פסחים", 'daf': 240, "num":4 };
            case "שקלים": return { "e": "Shekalim", "h": "שקלים", 'daf': 64, "num":5};
            case "יומא": return { "e": "Yoma", "h": "יומא", 'daf': 173, "num":6};
            case "סוכה": return { "e": "Sukah", "h": "סוכה", 'daf': 110, "num":7 };
            case "ביצה": return { "e": "Beitzah", "h": "ביצה", 'daf': 78, "num":8 };
            case "השנה":
            case "ראש השנה": return { "e": "Rosh Hashanah", "h": "ראש השנה", 'daf': 67, "num":9 };
            case "תענית": return { "e": "Ta'anis", "h": "תענית", 'daf': 59, "num":10 };
            case "מגילה": return { "e": "Megilah", "h": "מגילה", 'daf': 61, "num":11 };
            case "קטן":
            case "מועד קטן": return { "e": "Moed Katan", "h": "מועד קטן", 'daf': 55, "num":12 };
            case "חגיגה": return { "e": "Chagigah", "h": "חגיגה", 'daf': 51, "num":13 };
            case "יבמות": return { "e": "Yevamos", "h": "יבמות", 'daf': 242, "num":14 };
            case "כתובות": return { "e": "Kesuvos", "h": "כתובות", 'daf': 222, "num":15 };
            case "נדרים": return { "e": "Nedarim", "h": "נדרים", 'daf': 180, "num":16 };
            case "נזיר": return { "e": "Nazir", "h": "נזיר", 'daf': 130, "num":17 };
            case "סוטה": return { "e": "Sotah", "h": "סוטה", 'daf': 96, "num":18 };
            case "גיטין": return { "e": "Gitin", "h": "גיטין", 'daf': 178, "num":19 };
            case "קידושין": return { "e": "Kidushin", "h": "קידושין", 'daf': 162, "num":20 };
            case "קמא":
            case "בבא קמא": return { "e": "Bava Kama", "h": "בבא קמא", 'daf': 236, "num":21 };
            case "מציעא":
            case "בבא מציעא": return { "e": "Bava Metzia", "h": "בבא מציעא", 'daf': 235, "num":22 };
            case "בתרא":
            case "בבא בתרא": return { "e": "Bava Basra", "h": "בבא בתרא", 'daf': 350, "num":23 };
            case "סנהדרין": return { "e": "Sanhedrin", "h": "סנהדרין", 'daf': 224, "num":24 };
            case "מכות": return { "e": "Makos", "h": "מכות", 'daf': 46, "num":25 };
            case "שבועות": return { "e": "Shevuos", "h": "שבועות", 'daf': 96, "num":26 };
            case "זרה":
            case "עבודה זרה": return { "e": "Avodah Zarah", "h": "עבודה זרה", 'daf': 150, "num":27 };
            case "הוריות": return { "e": "Horayos", "h": "הוריות", 'daf': 25, "num":28 };
            case "זבחים": return { "e": "Zevachim", "h": "זבחים", 'daf': 238 , "num":29};
            case "מנחות": return { "e": "Menachos", "h": "מנחות", 'daf': 217, "num":30 };
            case "חולין": return { "e": "Chulin", "h": "חולין", 'daf': 281, "num":31 };
            case "בכורות": return { "e": "Bechoros", "h": "בכורות", 'daf': 119, "num":32 };
            case "ערכין": return { "e": "Erchin", "h": "ערכין", 'daf': 65, "num":33 };
            case "תמורה": return { "e": "Temurah", "h": "תמורה", 'daf': 65, "num":34 };
            case "כריתות": return { "e": "Kerisus", "h": "כריתות", 'daf': 54, "num":35 };
            case "מעילה": return { "e": "Me'ilah etc", "h": "מעילה", 'daf': 41, "num":36 };//mesechta 37 is not learnt in amud yomi
            case "תמיד": return { "e": "Me'ilah etc", "h": "תמיד", 'daf': 64, "num":38 };//17 is  the actual number however tamid starts on 25B so put in 64 to work out
            case "נדה": return { "e": "Nidah", "h": "נדה", 'daf': 143, "num":40}; //mesechta 39 is not learnt in amud yomi
            default: return {};
        }
    }

    function mesechtaAdjuster(elem){//for hebrew books they dont have tamid etc. and its not zero based
        switch(elem){
            case 35://meilah
            case 36://tamid
                return 36;
            case 37: //nidah
                return 37;
            default:
                return elem+1;
        }
    }

    function dafAdjuster(elem, mesechta){
        switch(mesechta){
            case 4://shkalim
                return elem-=1;
            case 36://tamid starts on 
                return elem+=23;
            default:
                return elem;
        }
    }

    function mesechtaGenerator() {
        options = '';
        mesecta.forEach(function (elem) {
            options += '<option value="' + elem + '">' + elem + '</option>';
        });
        return options;
    }
    function dafGenerator() {
        usersMesechta = mesechtaObjectFinder(selectMesechta.val());
        options = '';
        var firstPage = dafAdjuster(2, mesecta.indexOf(selectMesechta.val()));
        for (var i = firstPage; i < (usersMesechta.daf / 2) + 2; i++) {
            options += '<option value="' + i + '">' + Hebcal.gematriya(i) + '</option>';
        }
        return options;
    }
    function amudGenerator() {
        usersMesechta = mesechtaObjectFinder(selectMesechta.val());
        if(selectMesechta.val()==="תמיד" && selectDaf.val() === '25'){ //needs to be first or else 'else if' is true
            selectAmud.append("<option value='b'>עמוד ב</option>");
        }else if ((usersMesechta.daf === (selectDaf.val() * 2) - 3) && (usersMesechta.daf <= (selectDaf.val() * 2) - 2)) {
            selectAmud.append("<option value='a'>עמוד א</option>");
        } else{
            selectAmud.append("<option value='a'>עמוד א</option>" +
                "<option value='b'>עמוד ב</option>");
        }
    }

    function showAmud(){
        var pageNumber = 0;
        thisAmud.empty();
        for(var i=0; i<=usersMesechta.num-1; i++){
            if(i === usersMesechta.num-1){ //this is the mesechta user is in middle
                pageNumber += (usersDaf*2);
                pageNumber -= usersAmud==='a' ? 3 : 2;
            }else{  //count every amud in that mesechta
                pageNumber += edaf[i];
            }
        }
        thisAmud.append((usersAmud === 'a' ? '.' : ':') + usersMesechta.h + ' ' + Hebcal.gematriya(usersDaf));
        theImgDaf.attr('src', 'http://images.e-daf.com/DafImg.asp?ID='+pageNumber+'&size=1');
        //theImgDaf.attr('src', 'http://dafyomi.org/edafnew/' + amudObject.e + '/' + findAmudShow + amudSide + '.jpg');
    }

    $(window).on('load', function () {
        $('#engDate').append(dayName[today.getDay()] + ', ' + monthName[mm] + ' ' + dd + ', ' + yyyy);
        $('#hebDateHebrew').append(hebDay.toString('h'));//" פרשת" +" "+hebDay.getSedra('h')+' '+
        $('#todaysAmud').append(hebDay.dafyomi('h'));
        usersArray = hebDay.dafyomi('h').split(' ');
        usersMesechta= usersArray.length===2 ? (mesechtaObjectFinder(usersArray[0].slice(1,usersArray[0].length))) : mesechtaObjectFinder(usersArray[1]);
        usersDaf= usersArray.length===2 ? Hebcal.gematriya(usersArray[1]) : Hebcal.gematriya(usersArray[2]);
        usersAmud = usersArray[0].slice(0,1)==='.'? 'a':'b';
        showAmud();
    });

    $('#nextAmud').click(function () {
        if(usersDaf*2 + (usersAmud === 'a' ? 0:1 )> (usersMesechta.daf+2)){  //end of mesechta
            switchToMesechta = mesecta.indexOf(usersMesechta.h)===37 ? 0:mesecta.indexOf(usersMesechta.h)+1;
            usersMesechta = mesechtaObjectFinder(mesecta[switchToMesechta]);
            usersDaf = dafAdjuster(2, mesecta.indexOf(usersMesechta.h) );
            usersAmud = usersMesechta.h !== "תמיד" ? 'a':'b'; //tamid starts on amud b
        }else{
            usersDaf = usersAmud === 'b' ? usersDaf += 1 : usersDaf;
            usersAmud = usersAmud === 'a' ? 'b' : 'a';
        }
        showAmud();
    });

    $('#prevAmud').click(function () {
        if( (usersMesechta.h !== "שקלים" && usersDaf*2 -(usersAmud==='a' ? 2:1 ) <= 2) || 
            (usersMesechta.h==="תמיד" && (usersDaf*2 -(usersAmud==='a' ? 2:1 ) <= 49)) ||
            (usersMesechta.h === "שקלים" && usersDaf*2 -(usersAmud==='a' ? 2:1 ) <= 0) ){ //beg of mesechta(and tamid starts on 25b)(skalim daf 1a)
            switchToMesechta = mesecta.indexOf(usersMesechta.h)===0 ? 37:mesecta.indexOf(usersMesechta.h)-1;
            usersMesechta = mesechtaObjectFinder(mesecta[switchToMesechta]) ;
            usersDaf = Math.ceil(usersMesechta.daf/2)+1;
            usersAmud = usersMesechta.daf % 2 !== 0 ? 'a':'b';
            showAmud();
        }else{
            usersDaf = usersAmud === 'b' ? usersDaf : usersDaf -= 1;
            usersAmud = usersAmud === 'a' ? 'b' : 'a';
            showAmud();
        }
    });

    $('#todaysAmud').click(function(){
        usersArray = hebDay.dafyomi('h').split(' ');
        usersMesechta= usersArray.length===2 ? (mesechtaObjectFinder(usersArray[0].slice(1,usersArray[0].length))) : mesechtaObjectFinder(usersArray[1]);
        usersDaf= usersArray.length===2 ? Hebcal.gematriya(usersArray[1]) : Hebcal.gematriya(usersArray[2]);
        usersAmud = usersArray[0].slice(0,1)==='.'? 'a':'b';
        showAmud();
    });

    $('.download').click(function(){
            if(usersMesechta.h==="שקלים"){
                skekalimHB = usersDaf*2+114 + (usersAmud==='a' ? 0:1);
                window.open('http://www.hebrewbooks.org/pdfpager.aspx?req=14138&st=&pgnum='+skekalimHB +'&hilite=', '_blank');
            }else{
                window.open('http://hebrewbooks.org/shas.aspx?mesechta='+mesechtaAdjuster(mesecta.indexOf(usersMesechta.h))+'&daf='+usersDaf + (usersAmud==='a' ? '':'b') +'&format=pdf', '_blank');
            }
    });
    
    $('#displayFind').click(function () {
        $('#findAmud').css('display', 'block');
        $('body').addClass('stop-scrolling');
        $('form').css('left', ((window.innerWidth / 2) - ($('form').outerWidth(true) / 2)));
        $('form').css('top', ((window.innerHeight / 2) - ($('form').outerHeight(true) / 2)));
        selectMesechta.empty();
        selectDaf.empty();
        selectMesechta.append(mesechtaGenerator());
        selectDaf.append(dafGenerator());
    });
    selectMesechta.on('change', function () {
        selectDaf.empty();
        selectAmud.empty();
        selectDaf.append(dafGenerator());
        selectAmud.append(amudGenerator());
    });
    selectDaf.on('change', function () {
        selectAmud.empty();
        selectAmud.append(amudGenerator());
    });
    $('#cancelFind').click(function () {
        $('#findAmud').hide();
        $('body').removeClass('stop-scrolling');
    });
    $('#okFind').click(function () {
        $('#findAmud').hide();
        $('body').removeClass('stop-scrolling');
        usersMesechta = mesechtaObjectFinder(selectMesechta.val());
        usersDaf = parseInt(selectDaf.val());
        usersAmud = selectAmud.val();
        showAmud();
    });

    //automatic page refresh at midnight
    var now = new Date();
    var night = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // the next day, ...
        0, 0, 0 // ...at 00:00:00 hours
    );
    var msTillMidnight = night.getTime() - now.getTime();
    setTimeout(function () {
        window.location.reload(true);
    }, msTillMidnight);

    $('#menuDiv').click(function(){
        if(!isMobileNav){
             $('nav').slideDown();
        }else{
            $('nav').slideUp();
        }
        isMobileNav = !isMobileNav;
    });


}());