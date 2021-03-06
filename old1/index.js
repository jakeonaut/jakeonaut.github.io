window.onload = main;

var bg_canvas;
var bg_ctx;
function main(){
    scrambleNameStart();
	
	bg_canvas = document.getElementById("bg-canvas");
	bg_canvas.style.zIndex = -9999;
	window.onmousemove = canvasMouseMove;
    window.onclick = canvasMouseClick;
	bg_ctx = bg_canvas.getContext("2d");
	window.onresize = canvasResize;
	canvasResize();
	
	document.getElementById("me_img").onclick = imageClick;
	window.setInterval(fadeCanvas, 100);
	window.setInterval(blinky, 500);
	
	document.getElementById("artprog").onmouseover = hoverOver;
	document.getElementById("artprog").onmouseout = hoverOut;
}

var thing = 0;
function hover(){
	if (!is_hover) return;
	thing+= 1;
	
	document.getElementById("artprog").style.marginLeft = thing+"px";
	document.getElementById("artprog").style.marginRight = "-"+thing+"px";
}

var is_hover = false;
function hoverOver(){ is_hover = true; }
function hoverOut(){ is_hover = false; }

var blink = true;
function blinky(){
	var dom = document.getElementById("blinky");
	if (blink)
		dom.style.visibility = "hidden";
	else dom.style.visibility = "";
	blink = !blink;
}

function fadeCanvas(){
	hover();
	bg_ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
}

function imageClick(){
	var biopic = document.getElementById("biopic");
	var bio = document.getElementById("bio");
    var biofeed = document.getElementById("bio_feed");
	biopic.style.display = "none";
	bio.style.display = "inline-block";
    biofeed.style.display = "inline-block";
    fillDiv(); //indexphp_status.js defined function
}

function canvasResize(){
	bg_canvas.width = window.innerWidth-32;
	bg_canvas.height = window.innerHeight-32;
	
	bg_ctx.fillStyle = "#ffffff";
	bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
	
    bg_ctx.imageSmoothingEnabled = false;
    bg_ctx.mozImageSmoothingEnabled = false;
    bg_ctx.imageSmoothingEnabled = false;
}

function getXY(e){
    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    
    return [e.clientX + left, e.clientY + top];
}

function canvasMouseMove(e){
	var xy = getXY(e);
    var x = xy[0];
    var y = xy[1];
	bg_ctx.fillStyle = "#ff00ff";
	
	var size = Math.floor(Math.random()*15)+5;
	bg_ctx.fillRect(x-Math.floor(size/2), y-Math.floor(size/2), size, size);
}
function canvasMouseClick(e){
    var xy = getXY(e);
    var x = xy[0];
    var y = xy[1];
    bg_ctx.fillStyle = "#00ff00";
    var size = Math.floor(Math.random()*50)+10;
    bg_ctx.fillRect(x-Math.floor(size/2), y-Math.floor(size/2), size, size);
}

function scrambleNameStart(){
    var name = "jake trower";
    var name_dom = document.getElementById("name");
	
    setTimeout(function(){ 
		scrambleNameStep(alphabet[0], name, name_dom, 0); 
	}, scramble_timeout);
}

var scramble_timeout = 60;
var new_letter_timeout = 1;
var alphabet = "abcdefghijklmnopqrstuvwxyz ";
function scrambleNameStep(curr_name, final_name, dom, count){
    if (curr_name === final_name) return;
	var rand = Math.floor(Math.random()*alphabet.length);

	for (var i = 0; i < curr_name.length; i++){
		var curr_letter = curr_name[i];
		var final_letter = final_name[i];
		if (curr_letter === final_letter){
			if (i == curr_name.length-1){
				if (curr_name.length < final_name.length){
					curr_name += alphabet[rand];
					count = 0;
				}
			}
			continue;
		}else{
			var index = alphabet.indexOf(curr_letter);
			var next_letter = alphabet[0];
			if (index+1 < alphabet.length)
				next_letter = alphabet[index+1];
			curr_name = curr_name.substr(0, i) + 
						next_letter + 
						curr_name.substr(i+1, curr_name.length-1);
		}
	}

    dom.innerHTML = curr_name;
	
	if (curr_name !== final_name){
		if (count >= new_letter_timeout && curr_name.length < final_name.length){
			count = -1;
			curr_name += alphabet[rand];
		}
		
		setTimeout(function(){ 
			scrambleNameStep(curr_name, final_name, dom, count+1); 
		}, scramble_timeout);
	}
}
