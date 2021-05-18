
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    
    function runSpeechRecognition() {   
    var action = document.getElementById("action");
        
    
        
        recognition.onstart = function() {
        
        };
        
        recognition.onspeechend = function() {
        
        recognition.stop();
        
        }
        
        recognition.onresult = function(event) {
        
        var transcript = event.results[0][0].transcript;
        
      document.querySelector("#final").innerHTML = transcript;
        
        };
        
        
        recognition.start();
        
        }
        
      