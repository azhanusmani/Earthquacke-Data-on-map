let mapImg;

let clon=0;
let clat=0;

// Position of Delhi,India
let lat=28.7041;
let lon=77.1025;
let zoom=1;

let earthquakes;



function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic3NwYm95ZCIsImEiOiJjamx3ZG41ZWcxNW5uM2tyNnJweWJrbXp3In0.ajwQgPkvPoNxbGozKtTTFA");
    // earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv")
     earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv")
}


function mercX(lon){
lon=radians(lon)
let a = (256/PI)*pow(2,zoom);
let b =lon +PI;
return a*b;
}


function mercY(lat){
lat= radians(lat)
let a = (256/PI)*pow(2,zoom);
let b =tan(PI/4 + lat/2);
let c=PI-log(b)
return a*c;
}

function setup() {
    createCanvas(1024,512)

    translate(width/2,height/2);
     imageMode(CENTER) 
    image(mapImg, 0, 0);

let cx=mercX(clon);
let cy=mercY(clat);

for( let i=0 ;i<earthquakes.length;i++){
  let data=earthquakes[i].split(",")
  let lat=data[1]
  let lon=data[2]
  let mag=data[4]
let x =mercX(lon)-cx;
let y= mercY(lat)-cy;

mag=pow(10,mag);

mag=sqrt(mag);

let magMax=sqrt(pow(10,10))

let d= map(mag,0,magMax,0,180);

stroke(255,0,0);
fill(255,0,0,200);
ellipse(x,y,d,d);
}


} 



