function get(id){
    return document.getElementById(id);
  }
 function rand(min,max){
   return Math.floor(Math.random()*(max-min+1))+min;
 }
 function move(a){
   if(a.sc<=(0.7-0.1*a.power)&&a.Q==0) a.sc+=(0.7-0.1*a.power)/4;
   else {
     a.Q=1;
     if(a.Q==0) a.sc=0.7-(0.1*a.power);
   }
   if(a.sc>=0&&a.Q==1) a.sc-=(0.7-0.1*a.power)/7;
   else {
     a.Q=0;
     if(a.Q==1) a.sc=0;
   }
   a.style.top=a.y+a.Y*a.sc+"px";
   a.style.left=a.x+a.X*a.sc+"px";
 }
 function create(x,y,sc){
   if(x>-0.5&&x<0.5) return;
   a=document.createElement("div");
   a.className="heartElement";
   a.power=parseInt(sc);
   a.style.top=parseInt(y)+(screen.height/2)+"px";
   a.style.left=parseInt(x)+(screen.width/2)+"px";
   a.x=parseInt(x+(screen.width/2));
   a.y=parseInt(y+(screen.height/2));
   a.X=x;
   a.Y=y;
   a.sc=0;
   a.Q=0;
   a.pass=1;
   a.timer=setInterval(move,100,a);
   get("borad").appendChild(a);
 }
 function create_H(x,y){
   if(x>-0.5&&x<0.5) return;
   b=document.createElement("div");
   b.className="H";
   b.style.top=parseInt(y)+(screen.height/2)+"px";
   b.style.left=parseInt(x)+(screen.width/2)+"px";
   setInterval(color,100,b);
   get("borad").appendChild(b);
 }
 function color(a){
   col_R=[0,255,255];
   col_G=[0,222,0];
   col_B=[0,250,0];
   what=rand(0,2);
   a.style.background="rgb("+col_R[what]+","+col_G[what]+","+col_B[what]+")";
 }
 function heart(){
   for(i=0;i<1800;i++){
     t=rand(-10000,10000);
       scale=Math.log(rand(1,100))+1;
       hx=16*Math.pow(Math.sin(t),3)*scale;
       hy=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*scale;
       create(hx,hy,scale);
   }
   for(i=0;i<1000;i++){
     t=rand(-1000,1000);
     scale=Math.log(rand(1,999))+1;
     hx=16*Math.pow(Math.sin(t),3)*scale;
     hy=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*scale;
       create_H(hx,hy);
   }
 }