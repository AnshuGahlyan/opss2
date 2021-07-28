var a,b,c;
var a1,b1
var z=0;
var q1,q2,q3,q4;

function preload(){
a1 = loadImage("5.png");
b1 = loadImage("1.png");
 

}
function setup() {
  createCanvas(1340,640);
  
 a = createSprite(670,200,1,1);
 a.addImage(a1);
a.scale = 0.4;

b = createSprite(200,200,1,1);
b.addImage(b1);
b.scale = 0.4;

c = createSprite(1140,200,1,1);
c.addImage(b1);
c.scale = 0.4;

}


function draw() {
z=z+1;
  if(z===30){
  json();
}
 
  background(0);
  drawSprites();
  fill("green");
  textSize(21);
 textFont("Nunito");
  text("Continent : ",50,500);
  text("Country : ",400,500);
  
  text("State : ",750,500);
  text("City : ",1050,500);
  text("IP : ",550,550);
  getcallback();

}
 async function getcallback(){
 

  var response = await fetch("http://ip-api.com/json/?fields=66846719");
  var responseJSON = await response.json();

  var country = responseJSON.country;
  var regionName = responseJSON.regionName;
  var continent = responseJSON.continent;
  var city = responseJSON.city;
 var query = responseJSON.query;
 console.log(city);

fill("blue");
textSize(21); 
  text(regionName,850,500);  
  text(country,500,500);
  text(continent,180,500);
  text(city,1150,500);
  text(query,600,550);
 

} 


  

  
