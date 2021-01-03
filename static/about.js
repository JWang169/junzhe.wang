var initDot = document.getElementById("loading");
   var loading = setInterval(function() {
       if(initDot.innerHTML.length == 5) {
           initDot.innerHTML = "";
       } else {
           initDot.innerHTML += ".";
       }
   }, 150); // Dot Speed

   var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 500);
   
   var initProgram = setTimeout(function(){
       var greeting = "GREETINGS FROM HOBOKEN";
       var message = "RUNNING RESUME FOR JUNZHE WANG";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: JUNZHE WANG";
       var $alias = "ALSO KNOWN AS: JOEY";
       var $intern = "FIRST-YEAR PHD STUDENT IN COMPUTER SCIENCE";
       var $ta = "RESEARCH ASSISTANT IN UNIVERSITY OF SOUTH CAROLINA";
       // var $occupation  = "AREAS: FULL-STACK DEVELOPMENT | MACHINE LEARNING ENGINEER | QUANTITATIVE RESEARCH";
       var $Education = "EDUCATION"
         var $Uofsc = "PH.D., COMPUTER SCIENCE, UNIVERSITY OF SOUTH CAROLINA, EXPECTED 05/2024";
         var $Stevens = "M.S., COMPUTER SCIENCE, STEVENS INSTITUTE OF TECHNOLOGY, 05/2020";
         var $NUAA = "B.E., MECHANICAL ENGINEERING, NANJING UNIVERSITY OF AERONAUTICS AND ASTRONAUTICS, 06/2015";

       var $Fullstack  = "EXPERIENCE";
         var $CSSFrameworks = "RESEARCH ASSISTANT IN SYSTEMS AND SOFTWARE SECURITY RESEARCH LAB @ UNIVERSITY OF SOUTH CAROLINA, 08/2020 - ";
         var $JSLibs = "TEACHING ASSISTANT FOR NATURAL LANGUAGE PROCESSING (CS584) @ STEVENS INSTITUTE OF TECHNOLOGY, 01/2020 - 05/2020";
         var $JSFrameworks = "INTERN IN QUANTITATIVE TRADING AND RISK MANAGEMENT @ MOORE CAPITAL MANAGEMENT, 05/2019 - 03/2020";
         var $PYFramework = "GRADUATE ASSISTANT @ STEVENS INSTITUTE OF TECHNOLOGY, 10/2018 - 05/2019" 
         var $JAVAFramework = "ELECTROMECHANICAL ENGINEER @ AVIC, 08/2015 - 08/2017";

       var $Natural = "RESEARCH INTERESTS";
         var $Tasks = "IOT SECURITY";
         var $Libraries = "BINARY CODE ANALYSIS";

      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 8);   
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
                           }, 500);
                      }
                  }, 50);  // Dot Speed
               };
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 8);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, 500);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 500);
            }
            function initAlias(i){
                  $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                     if(i < $alias.length){
                        setTimeout(function(){
                           initAlias(i + 1);   
                        }, 8);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initIntern(0);
                        }, 500);
                     }
            }
            function initIntern(i){
               $("#intern").addClass("sign cursor").text($intern.substring(0, i));
                     if(i < $intern.length){
                        setTimeout(function(){
                           initIntern(i + 1);
                        }, 8);
                     }else{
                        $("#intern").removeClass("cursor");
                        setTimeout(function() {
                           initTa(0);
                        }, 500);
                     }
            }
            function initTa(i){
               $("#ta").addClass("sign cursor").text($ta.substring(0, i));
                     if(i < $ta.length){
                        setTimeout(function(){
                           initTa(i + 1);
                        }, 8);
                     }else{
                        $("#ta").removeClass("cursor");
                        setTimeout(function() {
                           initEducation(0);
                        }, 500);
                     }
            }
            function initEducation(i){
               $('#education-span').addClass('fa fa-graduation-cap');
               $("#education").addClass("cursor").text($Education.substring(0, i));
                     if(i < $Education.length){
                        setTimeout(function(){
                           initEducation(i + 1);
                        }, 8);
                     }else{
                        $("#education").removeClass("cursor");
                        setTimeout(function() {
                           initUofsc(0);
                        }, 500);
                     }
            }
            function initUofsc(i){
               $("#uofsc").addClass("sign cursor").text($Uofsc.substring(0, i));
                     if(i < $Uofsc.length){
                        setTimeout(function(){
                           initUofsc(i + 1);
                        }, 8);
                     }else{
                        $("#uofsc").removeClass("cursor");
                        setTimeout(function() {
                           initStevens(0);
                        }, 500);
                     }
            }
            function initStevens(i){
               $("#stevens").addClass("sign cursor").text($Stevens.substring(0, i));
                     if(i < $Stevens.length){
                        setTimeout(function(){
                           initStevens(i + 1);
                        }, 8);
                     }else{
                        $("#stevens").removeClass("cursor");
                        setTimeout(function() {
                           initNuaa(0);
                        }, 500);
                     }
            }
            function initNuaa(i){
               $("#nuaa").addClass("sign cursor").text($NUAA.substring(0, i));
                     if(i < $NUAA.length){
                        setTimeout(function(){
                           initNuaa(i + 1);
                        }, 8);
                     }else{
                        $("#nuaa").removeClass("cursor");
                        setTimeout(function() {
                           initFullstack(0);
                        }, 500);
                     }
            }
            function initFullstack(i){
               $('#fullstack-span').addClass('fa fa-internet-explorer');
               $("#fullstack").addClass("cursor").text($Fullstack.substring(0, i));
                     if(i < $Fullstack.length){
                        setTimeout(function(){
                           initFullstack(i + 1);
                        }, 8);
                     }else{
                        $("#fullstack").removeClass("cursor");
                        setTimeout(function() {
                           initCSSFrameworks(0);
                        }, 500);
                     }
            }
            function initCSSFrameworks(i){
               $("#css-frameworks").addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                     if(i < $CSSFrameworks.length){
                        setTimeout(function(){
                           initCSSFrameworks(i + 1);
                        }, 8);
                     }else{
                        $("#css-frameworks").removeClass("cursor");
                        setTimeout(function() {
                           initJSLibs(0);
                        }, 500);
                     }
            }
            function initJSLibs(i){
               $("#js-libs").addClass("sign cursor").text($JSLibs.substring(0, i));
                     if(i < $JSLibs.length){
                        setTimeout(function(){
                           initJSLibs(i + 1);
                        }, 8);
                     }else{
                        $("#js-libs").removeClass("cursor");
                        setTimeout(function() {
                           initJSFrameworks(0);
                        }, 500);
                     }
            }
            function initJSFrameworks(i){
               $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                  if(i < $JSFrameworks.length){
                     setTimeout(function(){
                         initJSFrameworks(i + 1);
                     }, 8);
                  }else{
                     $('#js-frameworks').removeClass("cursor");
                        setTimeout(function() {
                           initPYFramework(0);
                        }, 500);
                  }
            }
            function initPYFramework(i){
               $('#py-framework').addClass("sign cursor").text($PYFramework.substring(0, i));
                  if(i < $PYFramework.length){
                     setTimeout(function(){
                         initPYFramework(i + 1);
                     }, 8);
                  }else{
                     $('#py-framework').removeClass("cursor");
                        setTimeout(function() {
                           initJAVAFramework(0);
                        }, 500);
                  }
            }

            function initJAVAFramework(i){
               $('#java-framework').addClass("sign cursor").text($JAVAFramework.substring(0, i));
                  if(i < $JAVAFramework.length){
                     setTimeout(function(){
                         initJAVAFramework(i + 1);
                     }, 8);
                  }else{
                     $('#java-framework').removeClass("cursor");
                        setTimeout(function() {
                           initNatural(0);
                        }, 500);
                  }
            }

            function initNatural(i){
               $('#natural-span').addClass("fa fa-lightbulb-o")
               $('#natural').addClass("cursor").text($Natural.substring(0, i));
                  if(i < $Natural.length){
                     setTimeout(function(){
                         initNatural(i + 1);
                     }, 8);
                  }else{
                     $('#natural').removeClass("cursor");
                     setTimeout(function() {
                           initTasks(0);
                        }, 500);
                  }
            }
            function initTasks(i){
               $('#tasks').addClass("sign cursor").text($Tasks.substring(0, i));
                  if(i < $Tasks.length){
                     setTimeout(function(){
                         initTasks(i + 1);
                     }, 8);
                  }else{
                     $('#tasks').removeClass("cursor");
                     setTimeout(function() {
                           initLibraries(0);
                        }, 500);
                  }
            }
            function initLibraries(i){
               $('#libraries').addClass("sign cursor").text($Libraries.substring(0, i));
                  if(i < $Libraries.length){
                     setTimeout(function(){
                         initLibraries(i + 1);
                     }, 8);
                  }else{
                     $('#libraries').removeClass("cursor");
                     setTimeout(function() {
                           initNNetworks(0);
                        }, 500);
                  }
            }

            function initNNetworks(i) {
                $('#nnetworks').addClass("sign cursor").text($NNetworks.substring(0, i));
                if (i < $Tasks.length) {
                    setTimeout(function () {
                        initNNetworks(i + 1);
                    }, 8);
                } else {
                }
              }
          }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 8);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 500);

initProgram()




