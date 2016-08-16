window.onload = main;

var bg_canvas;
var bg_ctx;
function main(){
    scrambleNameStart();
	
	bg_canvas = document.getElementById("bg-canvas");
	bg_canvas.style.zIndex = -9999;
	window.onmousemove = canvasMouseMove;
	bg_ctx = bg_canvas.getContext("2d");
	window.onresize = canvasResize;
	canvasResize();
	
	document.getElementById("me_img").onclick = imageClick;
	window.setInterval(fadeCanvas, 100);
}

function fadeCanvas(){
	bg_ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
}

function imageClick(){
	alert("it doesn't work yet");
}

function canvasResize(){
	bg_canvas.width = window.innerWidth;
	bg_canvas.height = window.innerHeight;
	
	bg_ctx.fillStyle = "#ffffff";
	bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
	
    bg_ctx.imageSmoothingEnabled = false;
    bg_ctx.mozImageSmoothingEnabled = false;
    bg_ctx.imageSmoothingEnabled = false;
}
function canvasMouseMove(e){
	var x = e.clientX;
	var y = e.clientY;
	bg_ctx.fillStyle = "#ff00ff";
	
	var size = Math.floor(Math.random()*15)+5;
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
