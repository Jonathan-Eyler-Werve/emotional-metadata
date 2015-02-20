var gmail, emo;

emo = new Object();  // global namespace for Emotional Metadata extension app data 

function refresh(f) {
  if( (/in/.test(document.readyState)) || (undefined === Gmail) ) {
    console.log("load wait runs")
    setTimeout('refresh(' + f + ')', 100);
  } else {
    f();
  }
}

var main = function(){
  console.log("main runs")
 
  gmail = new Gmail(); // contains gmail data api; requires gmail.js & jQuery
  
  checkForApiFail() // we expect the Gmail api to break, therefore error detection is built in

  console.log('Hello,', gmail.get.user_email())

  if ( emo.gmailApiWorks === true ) {
    // run the app methods 
    // run survey unless up-to-date survey; storing data  
    // bind to send email event, before  
    // insert packaged email 

  }
  else { 
    alert("The Emotional Metadata extension unable to communicate with Gmail. It's shutting down now, so Gmail will operate normally."); 
    console.log("Emotional Metadata shut down due to gmail api fail. Inspect \'emo\' and \'gmail\' for details");
  };

}

// define runSurvey function

// define makeFooter function 

// 

function checkForApiFail () {
  console.log("checkForApiFail runs")
  if ( gmail.get.user_email === undefined ) { // test all of the gmail API requirements 
    emo.gmailApiWorks = false;
  }
  else {
    emo.gmailApiWorks = true;
  };

};


refresh(main);
