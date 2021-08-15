var SpeechRecognition = window.webkitSpeechRecognition; 
  //this is a web speak api used to reconised what we are speaking and convert it to text.
var recognition = new SpeechRecognition();
//this will creat a recongnition variable to store our speach in a variable
function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();//this start function is a pre-defined function it will convert your speach to text.
} 
 
recognition.onresult = function(event) {


 console.log(event); 
 var Content = event.results[0][0].transcript;

 document.getElementById("textbox").innerHTML = Content;
 console.log(Content);
   if(Content =="take my selfie")
   {
    //  console.log("taking selfie --- ");
     speak();
   }
}
//below function will define speech api and this function will be called only when you say take my selfie
function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        takesnapshot(); 
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
function takesnapshot(){
  Webcam.snap(function(dataurl)

{document.getElementById("result").innerHTML="<img id='selfie' src='"+dataurl+"'>";


}
  
  
  
  );
}

function save(){
link=document.getElementById("link");
var img=document.getElementById("selfie_img").src;
link.href=img;
link.click();








}