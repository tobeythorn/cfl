function initialize(){
	xo = 450;
	yo = 300;
	Radius = 1.5;
	ScaledRadius = Radius*100;
	ArrowLength = 100*Radius;
	AVelocity = Math.PI/2;
	Angle = 0;
	Mass = 1.5;
	Velocity = 3;
	AngularVelocity = Velocity/Radius;
	vox = ScaledRadius*Math.cos(AngularVelocity*0);
	voy = ScaledRadius*Math.sin(AngularVelocity*0);
	speednumber = 1;
	timeinms = 0;
	
	theCanvas = document.getElementById("CanvasOne");
	ctx = theCanvas.getContext("2d");	
	
	RanOnce = "No";
	Running = "No";
	
	j = 0;
	
	ForceDisplay = 0;
	timerstatus = "off";
	timertime = 0;
	timeractivation = "no";
	
	displayconditions();
}


function LoadIt(){
	document.getElementById("StopButton").style.visibility = "hidden";
	document.getElementById("StartButton").style.visibility = "visible";
	document.getElementById("BeginButton").style.visibility = "hidden";
	document.getElementById("LabSection").style.visibility = "visible";
	document.getElementById("OverviewSection").style.visibility = "hidden";
}


function MassChange(x){
	Mass = Mass + x;
	if (Mass < .5){
		Mass = .5;
	}
	if (Mass > 2){
		Mass = 2;
	}
	
	if (RanOnce == "Yes"){
		clearInterval(StartItMoving);
	}

	displayconditions();
}

function SpeedChange(){
	if(speednumber == 1){
		Velocity = 1.5
		speednumber = 2
	}
	else if(speednumber == 2){
		Velocity = 7
		speednumber = 3
	}
	else if(speednumber == 3){
		Velocity = 3
		speednumber = 1
	}
	
	AngularVelocity = Velocity/Radius;
	vox = ScaledRadius*Math.cos(AngularVelocity*0);
	voy = ScaledRadius*Math.sin(AngularVelocity*0);
	
	if (RanOnce == "Yes"){
		clearInterval(StartItMoving);
	}
	
	displayconditions();
}

function RadiusChange(x){
	Radius = Radius + x;
	if (Radius < .5){
		Radius = .5;
	}
	if (Radius > 2.0){
		Radius = 2.0;
	}
	ScaledRadius = Radius*100;
	AngularVelocity = Velocity/Radius;
	vox = ScaledRadius*Math.cos(AngularVelocity*0);
	voy = ScaledRadius*Math.sin(AngularVelocity*0);
	
	if (RanOnce == "Yes"){
		clearInterval(StartItMoving);
	}
	
	displayconditions();
}

function displayconditions(){
	document.getElementById("SpeedText").innerHTML = "Velocity #: " + speednumber;
	document.getElementById("MassText").innerHTML = Mass.toFixed(2);
	document.getElementById("RadiusText").innerHTML = Radius.toFixed(2);
	SizeOfBall = Mass*10;
	Force = Mass*Velocity*Velocity/Radius;
	drawingpart();
	
}
function StartIt(){
	document.getElementById("StopButton").style.visibility = "visible";
	document.getElementById("StartButton").style.visibility = "hidden";
	document.getElementById("Controls").style.visibility = "hidden";
	document.getElementById("ForceProbe").style.visibility = "visible";
	document.getElementById("TimerStartButton").style.visibility = "visible";
	
	RanOnce = "Yes";
	Running = "Yes";
	timeractivation = "yes";
	Force = Mass*Velocity*Velocity/Radius;
	StartItMoving = setInterval(drawingpart, 20);
}

function drawingpart(){
	elapsedtime = timeinms/1000;
	x1 = xo + ScaledRadius*Math.cos(AngularVelocity*elapsedtime);
	y1 = yo - ScaledRadius*Math.sin(AngularVelocity*elapsedtime);
	/* 	background drawing */
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,900,600);
	
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(xo, 265);
	ctx.lineTo(xo,510);
	ctx.strokeStyle = '#000099';
	ctx.stroke();
	ctx.closePath();

	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 10;
	ctx.fillStyle = '#333333';
	ctx.beginPath();
	ctx.moveTo(853, 87);
	ctx.lineTo(853, 120);
	ctx.lineTo(600, 470);
	ctx.lineTo(45, 470);
	ctx.lineTo(45, 440);
	ctx.lineTo(600, 440);
	ctx.lineTo(853, 87);
	ctx.fill();
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(600, 440);
	ctx.lineTo(600,470);
	ctx.stroke();
	ctx.closePath();
	




	ctx.save();
	
	ctx.transform(.70,0,-0.5,.70,283,50);
	/* Grid */
	
	
	
	
	
	ctx.globalAlpha = 0.75;
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 10;
	ctx.fillStyle = '#CCCCCC';
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(50, 550);
	ctx.lineTo(850, 550);
	ctx.lineTo(850, 50);
	ctx.lineTo(50, 50);
	ctx.fill();
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.stroke();
	ctx.closePath();
	ctx.globalAlpha = 1;
	
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 3;
	for(i=0; i<17;i++){
		ctx.beginPath();
		ctx.moveTo(50*i+50, 50);
		ctx.lineTo(50*i+50, 550);
		ctx.stroke();
		ctx.closePath();
	}
	for(i=0; i<11;i++){
		ctx.beginPath();
		ctx.moveTo(50, 50*i+50);
		ctx.lineTo(850, 50*i+50);
		ctx.stroke();
		ctx.closePath();
	}
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(450, 50);
	ctx.lineTo(450, 550);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(50, 300);
	ctx.lineTo(850, 300);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(50, 550);
	ctx.lineTo(850, 550);
	ctx.lineTo(850, 50);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(xo,yo, 10, 0, 2*Math.PI, false);
	ctx.lineWidth = 2;
	ctx.fillStyle = '#FFFFFF';
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	
/* Rope */

	/*Primary Line */	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(xo+3, yo+7);
	ctx.lineTo(xo,yo);
	ctx.strokeStyle = '#000099';
	ctx.lineCap = 'round';
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(xo,yo);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = '#000099';
	ctx.lineCap = 'round';
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(xo,yo, ScaledRadius, 0, 2*Math.PI, false);
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000000';
	ctx.stroke();
	ctx.closePath();
	
	/*Puck*/
	ctx.beginPath();
	ctx.arc(x1, y1, SizeOfBall, 0, 2 * Math.PI, false);
	ctx.fillStyle = '#009900';
	ctx.fill();
	ctx.closePath();
	
	ctx.restore();
	
	
	
	if (timerstatus == "on"){
		timertime = timertime + .02;
	}
	
	if (timeractivation == "yes"){
		ctx.fillStyle="#990000";
		ctx.font="24px Arial";
		TimeText = "elapsed time = " + timertime.toFixed(2) + " s";
		ctx.fillText(TimeText,275,32);
	}
	
	if (Running == "Yes"){
		timeinms = timeinms +20;
	}
	if (j == 50){
		FakeError = Math.floor((Math.random()*25))/10000;
		FakeErrorDirection = Math.floor((Math.random()*2));
		if (FakeErrorDirection < 1){
			ForceDisplay = Force + Force*FakeError;
		}
		else{
			ForceDisplay = Force - Force*FakeError;

		}
		j = 0;
	}
	j++;
	document.getElementById("ForceProbe").innerHTML = ForceDisplay.toFixed(2) + " N";
}

function StopIt(){
	clearInterval(StartItMoving);
	Running = "No";
	timerstatus = "off";
	timertime = 0;
	timeinms = 0;
	Force = 0;
	ForceDisplay = 0;
	timeractivation = "no";
	drawingpart();
	document.getElementById("StopButton").style.visibility = "hidden";
	document.getElementById("StartButton").style.visibility = "visible";
	document.getElementById("Controls").style.visibility = "visible";
	document.getElementById("TimerStartButton").style.visibility = "hidden";
	document.getElementById("TimerStopButton").style.visibility = "hidden";
	document.getElementById("TimerResetButton").style.visibility = "hidden";
	document.getElementById("ForceProbe").innerHTML = ForceDisplay.toFixed(2) + " N";

}

function starttimer(){
	document.getElementById("TimerStartButton").style.visibility = "hidden";
	document.getElementById("TimerStopButton").style.visibility = "visible";
	document.getElementById("TimerResetButton").style.visibility = "hidden";
	timerstatus = "on";
}

function stoptimer(){
	document.getElementById("TimerStartButton").style.visibility = "hidden";
	document.getElementById("TimerStopButton").style.visibility = "hidden";
	document.getElementById("TimerResetButton").style.visibility = "visible";
	timerstatus = "off";
}

function resettimer(){
	document.getElementById("TimerStartButton").style.visibility = "visible";
	document.getElementById("TimerStopButton").style.visibility = "hidden";
	document.getElementById("TimerResetButton").style.visibility = "hidden";
	timerstatus = "off";
	timertime = 0;
}

