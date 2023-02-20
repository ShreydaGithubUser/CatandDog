function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z5uyF40X5/model.json', modelReady);
}

function modelReady () {
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
console.log(results);
random_num_r = Math.floor(Math.random()*255)+1;
random_num_g = Math.floor(Math.random()*255)+1;
random_num_b = Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML = 'I can Hear -' + results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%";
document.getElementById("result_label").style.color = "rgb("+random_num_r + ","+random_num_g+","+random_num_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_num_r + ","+random_num_g+","+random_num_b+")";
dog_bark = document.getElementById("dog");
cat_meow = document.getElementById("cat");

if (results[0].label == "Dog") {
    dog_bark.src = 'bark.gif';
    cat_meow.src = 'th (2).jpg';
  

}
else if (results[0].label == "Cat") {
   dog_bark.src = 'th (1).jpg';
    cat_meow.src = 'meow.gif';
 
}
else if (results[0].label == "Background Noise") {
    dog_bark.src = "th (1).jpg"
cat_meow.src = "th (2).jpg"
}
    }
}