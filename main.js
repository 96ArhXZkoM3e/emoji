prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach("#camera")


function take_snapshot()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'

  })
}

console.log("ml5version is",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6OzCMiII8/model.json",modelLoaded)

function modelLoaded()
{
    console.log("model is loaded")
}

function speak()
{
synth=window.speechSynthesis
speakdata1="The first prediction is"+prediction1
speakdata2="The second prediction is"+prediction2
utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
synth.speak(utterThis)
}






















































































