var canvas = new fabric.Canvas("myCanvas");
var x = 10;
var y = 10;
var block_width = 30;
var block_height = 30;
var player_object;
var blockImg_object;

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top : y,left : x

        });
    canvas.add(player_object);  
    })
}
function new_img(getImg){
    console.log("inside new img function")
    fabric.Image.fromURL(getImg , function(Img){
        blockImg_object = Img;
        blockImg_object.scaleToWidth(block_width);   
        blockImg_object.scaleToHeight(block_height);
        blockImg_object.set({
            top : y , 
            left : x
        })
        canvas.add(blockImg_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode ;
    console.log(keyPressed);
   
    if(e.shiftKey == true && keyPressed == "187"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("Height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed == "189"){
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("Height").innerHTML = block_height;
    }
    if(keyPressed == "87"){
        new_img("wall.jpg");
        console.log("w");
    }
    if(keyPressed == "71"){
        new_img("ground.png");
    
    }
    if(keyPressed == "76"){
        new_img("light_green.png");
    }
    if(keyPressed == "84"){
        new_img("trunk.jpg");
    }
    if(keyPressed == "82"){
        new_img("roof.jpg");
    }
    if(keyPressed == "89"){
        new_img("yellow_wall.png");
    }
    if(keyPressed == "68"){
        new_img("dark_green.png");
    }
    if(keyPressed == "85"){
        new_img("unique.png");
    }
    if(keyPressed == "67"){
        new_img("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == "37"){
        left();

    }
    if(keyPressed == "38"){
        up();
    }
    if(keyPressed == "39"){
        right();
    }
    if(keyPressed == "40"){
        down();
    }
}
function right(){
    console.log("inside left");
    if(x <= 850){
        x = x + 10;
        console.log(x);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    console.log("inside right");
    if(x >= 0){
        x = x - 10;
        console.log(x);
        canvas.remove(player_object);
        player_update();
    }
}
function up(){
    console.log("inside up");
    if(y >= 0){
        y = y - 10;
        console.log(y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    console.log("inside down");
    if(y <= 475){
        y = y + 10;
        console.log(y);
        canvas.remove(player_object);
        player_update();
    }
}
