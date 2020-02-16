var initDot = document.getElementById("loading");
   var loading = setInterval(function() {
       if(initDot.innerHTML.length == 5) {
           initDot.innerHTML = "";
       } else {
           initDot.innerHTML += ".";
       }
   }, 350); // Dot Speed

   var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 1500);
   
   var initProgram = setTimeout(function(){
       var greeting = "GREETINGS FROM HOBOKEN";
       var message = "RUNNING RESUME FOR JUNZHE WANG";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: JUNZHE WANG";
       var $Alias = "ALSO KNOWN AS: JOEY";
       var $intern = "RISK MANAGEMENT AND QUANTITATIVE TRADING RESEARCH INTERN AT MOORE CAPITAL MANAGEMENT";
       var $ta = "TEACHING ASSISTANT FOR NATURAL LANGUAGE PROCESSING AT STEVENS INSTITUTE OF TECHNOLOGY";
       // var $occupation  = "AREAS: FULL-STACK DEVELOPMENT | MACHINE LEARNING ENGINEER | QUANTITATIVE RESEARCH";
       var $Education = "EDUCATION: MASTER STUDENT IN COMPUTER SCIENCE | GRADUATING IN MAY 2020";
         var $Stevens = "STEVENS INSTITUTE OF TECHNOLOGY: MASTER OF SCIENCE IN COMPUTER SCIENCE | MAY 2020";
         var $NUAA = "NANJING UNIVERSITY OF AERONAUTICS AND ASTRONAUTICS: BACHELOR OF ENGINEERING IN MECHANICAL ENGINEERING | JUNE 2015";


       var $Fullstack  = "FULL-STACK WEB DEVELOPMENT CORE: HTML | CSS | JAVASCRIPT | PYTHON | JAVA";
         var $CSSFrameworks = "CSS FRAMEWORKS: BOOTSTRAP | SEMANTIC UI";
         var $JSLibs = "JAVASCRIPT LIBRARIES: JQUERY | D3 | VUE.JS";
         var $JSFrameworks = "JAVASCRIPT FRAMEWORKS: ANGULARJS | REACT";
         var $PYFramework = "PYTHON FRAMEWORK: DJANGO";
         var $JAVAFramework = "JAVA FRAMEWORK: SPRING";
         var $DATAbase = "DATABASE: MONGODB | SQLITE | POSTGRESQL";

       var $Natural = "NATURAL LANGUAGE PROCESSING";
         var $Tasks = "TASKS: TEXT CLASSIFICATION | MACHINE TRANSLATION | NATURAL LANGUAGE GENERATION";
         var $Libraries = "LIBRARYIES: KERAS | NLTK| SCIKIT-LEARN | TENSORFLOW | ";
         var $NNetworks = "NEURAL NETWORK ARCHITECTURE: CNN | GRU | LSTM";


       var $Mobile = "IOS DEVELOPMENT";
         var $Tasks = "TASKS: TEXT CLASSIFICATION | MACHINE TRANSLATION | NATURAL LANGUAGE GENERATION";
         var $Libraries = "LIBRARYIES: KERAS | NLTK| SCIKIT-LEARN | TENSORFLOW";
         var $NNetworks = "NEURAL NETWORK ARCHITECTURE: CNN | GRU | LSTM";

      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
            }else{
               $('#message').removeClass("cursor");
               var loadingResume = function(){
                     $("#loadingMessage2").show()
                     var dotAlpha = document.getElementById("alpha-loading");
                     var loadingAlpha = setInterval(function() {
                      if(dotAlpha.innerHTML.length == 6) {
                          dotAlpha.innerHTML = "";
                      } else {
                          dotAlpha.innerHTML += ".";
                          setTimeout(function() {
                              clearInterval(loadingAlpha);
                              $("#loadingMessage2").hide();
                           }, 2000);
                      }
                  }, 350);  // Dot Speed
               };
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 35);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, 1500);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 2500);
            }
            function initAlias(i){
                  $("#alias").addClass("sign cursor").text($Alias.substring(0, i));
                     if(i < $Alias.length){
                        setTimeout(function(){
                           initAlias(i + 1);   
                        }, 35);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initIntern(0);
                        }, 1500);
                     }
            }
            function initIntern(i){
               $("#intern").addClass("sign cursor").text($intern.substring(0, i));
                     if(i < $intern.length){
                        setTimeout(function(){
                           initIntern(i + 1);
                        }, 35);
                     }else{
                        $("#intern").removeClass("cursor");
                        setTimeout(function() {
                           initTa(0);
                        }, 1500);
                     }
            }
            function initTa(i){
               $("#ta").addClass("sign cursor").text($ta.substring(0, i));
                     if(i < $ta.length){
                        setTimeout(function(){
                           initTa(i + 1);
                        }, 35);
                     }else{
                        $("#ta").removeClass("cursor");
                        setTimeout(function() {
                           initEducation(0);
                        }, 1500);
                     }
            }
            function initEducation(i){
               $('#education-span').addClass('fa fa-graduation-cap');
               $("#education").addClass("cursor").text($Education.substring(0, i));
                     if(i < $Education.length){
                        setTimeout(function(){
                           initEducation(i + 1);
                        }, 35);
                     }else{
                        $("#education").removeClass("cursor");
                        setTimeout(function() {
                           initStevens(0);
                        }, 1500);
                     }
            }
            function initStevens(i){
               $("#stevens").addClass("sign cursor").text($Stevens.substring(0, i));
                     if(i < $Stevens.length){
                        setTimeout(function(){
                           initStevens(i + 1);
                        }, 35);
                     }else{
                        $("#stevens").removeClass("cursor");
                        setTimeout(function() {
                           initNuaa(0);
                        }, 1500);
                     }
            }
            function initNuaa(i){
               $("#nuaa").addClass("sign cursor").text($NUAA.substring(0, i));
                     if(i < $NUAA.length){
                        setTimeout(function(){
                           initNuaa(i + 1);
                        }, 35);
                     }else{
                        $("#nuaa").removeClass("cursor");
                        setTimeout(function() {
                           initFullstack(0);
                        }, 1500);
                     }
            }
            function initFullstack(i){
               $('#fullstack-span').addClass('fa fa-internet-explorer');
               $("#fullstack").addClass("cursor").text($Fullstack.substring(0, i));
                     if(i < $Fullstack.length){
                        setTimeout(function(){
                           initFullstack(i + 1);
                        }, 35);
                     }else{
                        $("#fullstack").removeClass("cursor");
                        setTimeout(function() {
                           initCSSFrameworks(0);
                        }, 1500);
                     }
            }
            function initCSSFrameworks(i){
               $("#css-frameworks").addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                     if(i < $CSSFrameworks.length){
                        setTimeout(function(){
                           initCSSFrameworks(i + 1);
                        }, 35);
                     }else{
                        $("#css-frameworks").removeClass("cursor");
                        setTimeout(function() {
                           initJSLibs(0);
                        }, 1500);
                     }
            }
            function initJSLibs(i){
               $("#js-libs").addClass("sign cursor").text($JSLibs.substring(0, i));
                     if(i < $JSLibs.length){
                        setTimeout(function(){
                           initJSLibs(i + 1);
                        }, 35);
                     }else{
                        $("#js-libs").removeClass("cursor");
                        setTimeout(function() {
                           initJSFrameworks(0);
                        }, 1500);
                     }
            }
            function initJSFrameworks(i){
               $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                  if(i < $JSFrameworks.length){
                     setTimeout(function(){
                         initJSFrameworks(i + 1);
                     }, 35);
                  }else{
                     $('#js-frameworks').removeClass("cursor");
                        setTimeout(function() {
                           initPYFramework(0);
                        }, 1500);
                  }
            }
            function initPYFramework(i){
               $('#py-framework').addClass("sign cursor").text($PYFramework.substring(0, i));
                  if(i < $PYFramework.length){
                     setTimeout(function(){
                         initPYFramework(i + 1);
                     }, 35);
                  }else{
                     $('#py-framework').removeClass("cursor");
                        setTimeout(function() {
                           initJAVAFramework(0);
                        }, 1500);
                  }
            }

            function initJAVAFramework(i){
               $('#java-framework').addClass("sign cursor").text($JAVAFramework.substring(0, i));
                  if(i < $JAVAFramework.length){
                     setTimeout(function(){
                         initJAVAFramework(i + 1);
                     }, 35);
                  }else{
                     $('#java-framework').removeClass("cursor");
                        setTimeout(function() {
                           initDATAbase(0);
                        }, 1500);
                  }
            }
            function initDATAbase(i){
               $('#database').addClass("sign cursor").text($DATAbase.substring(0, i));
                  if(i < $DATAbase.length){
                     setTimeout(function(){
                         initDATAbase(i + 1);
                     }, 35);
                  }else{
                     $('#database').removeClass("cursor");
                     setTimeout(function() {
                           initNatural(0);
                        }, 1500);
                  }
            }

            function initNatural(i){
               $('#natural-span').addClass("fa fa-lightbulb-o")
               $('#natural').addClass("cursor").text($Natural.substring(0, i));
                  if(i < $Natural.length){
                     setTimeout(function(){
                         initNatural(i + 1);
                     }, 35);
                  }else{
                     $('#natural').removeClass("cursor");
                     setTimeout(function() {
                           initTasks(0);
                        }, 1500);
                  }
            }
            function initTasks(i){
               $('#tasks').addClass("sign cursor").text($Tasks.substring(0, i));
                  if(i < $Tasks.length){
                     setTimeout(function(){
                         initTasks(i + 1);
                     }, 35);
                  }else{
                     $('#tasks').removeClass("cursor");
                     setTimeout(function() {
                           initLibraries(0);
                        }, 1500);
                  }
            }
            function initLibraries(i){
               $('#libraries').addClass("sign cursor").text($Libraries.substring(0, i));
                  if(i < $Libraries.length){
                     setTimeout(function(){
                         initLibraries(i + 1);
                     }, 35);
                  }else{
                     $('#libraries').removeClass("cursor");
                     setTimeout(function() {
                           initNNetworks(0);
                        }, 1500);
                  }
            }

            function initNNetworks(i) {
                $('#nnetworks').addClass("sign cursor").text($NNetworks.substring(0, i));
                if (i < $Tasks.length) {
                    setTimeout(function () {
                        initNNetworks(i + 1);
                    }, 35);
                } else {
                }
              }
          }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 35);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 1500);

initProgram()