
var image = document.getElementById("bba");
var color = document.getElementById("aad");
var color2 = document.getElementById("aac");


var video = document.getElementById("videoid")
var src = document.getElementById("src");




function changeImage(){
    if(image.getAttribute("src") == "/image/b.png"){
        image.src = "/image/a.png"
    }else{image.src = "/image/a.png"

    }
}

function changeVideo(){

    console.log('change video ', src);
    
    src.src = '/image/IMG_0999.mp4'
    video.load()

    

}

function changeColor(){
    
    if(color.style.color == "rgb(50,50,50)"){
        color.style.color = "gold";
        color2.style.color="rgb(50,50,50)"
        

    }else{color.style.color = "gold";
    color2.style.color="rgb(50,50,50)";
    

    }
}



function changeImage2(){
    if(image.getAttribute("src") == "/image/a.png"){
        image.src = "/image/b.png"
    }else{image.src = "/image/b.png"

    }
}

function changeVideo2(){
    
    src.src = "/image/IMG_1015.MOV"
    video.load()
}

function changeColor2(){
    
    if(color2.style.color == "rgb(50,50,50)"){
        color2.style.color = "gold";
        color.style.color="rgb(50,50,50)"
        
    }else{color2.style.color = "gold";
    color.style.color="rgb(50,50,50)"
    

    }
}