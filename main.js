 function preload(){
classifier=ml5.imageClassifier('DoodleNet');
 }
 function setup(){
canvas= createCanvas(600,400);
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;


 }
 function draw(){
strokeWeight(12);
stroke("pink");
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);

}

 }
 function classifyCanvas(){
     classifier.classify(canvas,gotResult);
 }

 function gotResult(error,result){
if(error){
    console.log(error)
}
else{
    console.log(result)
    document.getElementById("spn1").innerHTML=result[0].label;
    document.getElementById("spn2").innerHTML=result[0].confidence;
    utterThis=new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
}
 }
 function vanish(){
     background("white");
 }