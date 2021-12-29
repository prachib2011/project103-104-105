Webcam.set({ 
      
    width:360,
    height:310, 
    image_format : 'png', 
    png_quality:100 
    
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach("#camera");
    
    function take_snapshot(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("result").innerHTML = '<img id="capture_face" src="'+data_uri+'"/>';
    
    });
    
    }
    
    console.log("ml5 verson:", ml5.verson);
    
    classifier=ml5.faceClassifier("https://teachablemachine.withgoogle.com/models/ulklsuS8V/model.json", modelLoaded);
    
    function modelLoaded(){
    
    console.log('model loaded!');
    
    }