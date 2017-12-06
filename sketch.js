var uomo;
var uomoMask;
var braccia;
var bracciaMask;
var piatto;

function preload(){
    uomo = loadImage("./assets/uomo.jpg");
    uomoMask = loadImage("./assets/uomo.png"); 
    braccia = loadImage("./assets/braccia.jpg");
    bracciaMask = loadImage("./assets/braccia.png");
    piatto = loadImage("./assets/lasagne.jpg");
}

function setup() {

	// Create the canvas
	createCanvas(windowWidth, windowHeight);

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
    uomo.mask(uomoMask);
    braccia.mask(bracciaMask);
}

function draw() {

	//get the volume
	var volume = mic.getLevel();

	background(4,0,84);
    
	push();
    
	//Start with transformations
	//move to the center of the canvas
	translate(width / 2, height / 2.6);
    scale(0.8,0.8);
    fill(255);
    
    //uomo
    
    image(uomo, 0 - (height * 0.8) / 1.45 / 2, 0 - (height * 0.8/2), ((height * 0.8) / 1.45), (height * 0.8));
    
    //bocca
    
    noStroke();
    fill(237,189,189);
    
    rect(0-(height * 0.8)*0.2/1.45/2,0-(height * 0.8)*0.06+map(volume,0,0.2,0,(height * 0.8)*0.03),(height * 0.8)/1.45*0.2,(height * 0.8)*0.1);
    
    //guance
    
    fill(255,189,189);
    
    ellipse(0-(height * 0.8)*0.35/1.45/2,0-(height * 0.8)*0.06,0-(height * 0.8)*0.35/1.45/2+map(volume,0,0.6,0,(height * 0.8)*0.1),0-(height * 0.8)*0.35/1.45/2);
    
    ellipse(0+(height * 0.8)*0.35/1.45/2,0-(height * 0.8)*0.06,0-(height * 0.8)*0.35/1.45/2+map(volume,0,0.6,0,(height * 0.8)*0.1),0-(height * 0.8)*0.35/1.45/2);
    
    //tavolo
    
    fill(255,255,255);
    rect(0-width/2-(width-width*0.8),height/2*0.75,width+width*0.8,height/3);
    
    fill(200,200,200);
    rect(0-width/2-(width-width*0.8),height/2+height/9,width+width*0.8,height/7);
    
    //braccia
    
    image(braccia, 0 - (height * 0.47) / 0.59 / 2, 0+height/10-map(volume,0,0.6,0,(height * 0.8)*0.1), ((height * 0.47) / 0.59), (height * 0.47));
    
    //piatto
    
    image(piatto, 0 - (height * 0.8) * 1.64 * 0.2 / 2, 0 + (height * 0.85/2), ((height * 0.8) * 1.64) * 0.2, (height * 0.8)*0.2);
    

	// Set the new size. Volume goes from 0 to 1.
	// You can remap it to any size you want.
	

	//All transformation are now dropped and the coordinate system is resetted.
	pop();

}

//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

