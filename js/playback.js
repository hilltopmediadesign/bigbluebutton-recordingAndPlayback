
    document.addEventListener( "DOMContentLoaded", function() {
      function getUrlParameters() {
        var map = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        map[key] = value;
        });
        return map; 
      }
     
      var audio;
      var slides;
      var params = getUrlParameters();
      MEETINGID = params['meetingId'];
      //alert(MEETINGID);
      var HOST = window.location.hostname;
      var RECORDINGS = "http://" + HOST + "/slides/" + MEETINGID;
      var SLIDES_XML = "http://" + HOST + "/slides/" + MEETINGID + '/slides.xml';
      var appName = navigator.appName;
	  var appVersion = navigator.appVersion;
	  audio = document.getElementById("audioRecording");
	  if(appName == "Microsoft Internet Explorer" ){
		if( navigator.userAgent.match("chromeframe")){
	  	  audio.setAttribute('src', RECORDINGS + '/audio/audio.ogg');
        	  audio.setAttribute('type','audio/ogg');
		}else{
		  var message = "To support this playback please install 'Google Chrome Frame', or use other browser: Firefox, Safari, Chrome, Opera";
  		  var line = document.createElement("p");
		  var link = document.createElement("a");
		  line.appendChild(document.createTextNode(message));
                  link.setAttribute("href", "http://www.google.com/chromeframe")
                  link.setAttribute("target", "_blank")
                  link.appendChild(document.createTextNode("Install Google Chrome Frame"));
		  document.getElementById("chat").appendChild(line);
		  document.getElementById("chat").appendChild(link);
		}
	  }else if (appVersion.match("Safari") != null && appVersion.match("Chrome") == null){
	  	audio.setAttribute('src', RECORDINGS + '/audio/recording.wav');
	        audio.setAttribute('type','audio/x-wav');
	  }else {
		audio.setAttribute('src', RECORDINGS + '/audio/audio.ogg');
        	audio.setAttribute('type','audio/ogg');
	  }	
	  audio.setAttribute('data-timeline-sources', SLIDES_XML) 
	}, false);
	
	function getAudio(){
		window.location="/slides/"+MEETINGID+"/audio/recording.wav";
	}
	
	function share(){
		
		window.location='mailto:?subject=BigBlueButton Presentation Link&body='+window.location;
	}
