
document.addEventListener("deviceready", onDeviceReady, false);
// variable to output the current x, y & z values of the accelerometer
var valueX;
var valueY;
var valueZ;

// when PhoneGap tells us everything is ready, start watching the accelerometer
function onDeviceReady() {
	valueX = document.getElementById("valueX");
	valueY = document.getElementById("valueY");
	valueZ = document.getElementById("valueZ");
	startWatch();
}

// start monitoring the state of the accelerometer
// Iniciar o monitoramento do estado do acelerômetro
function startWatch() {
	var options = { frequency: 500 };
	navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// if the z-axis has moved outside of our sensitivity threshold, move the aarvark's head in the appropriate direction
//se o eixo z passou fora do nosso limiar de sensibilidade, mova a cabeça do aarvark na direção apropriada
function onSuccess(acceleration) {
	valueX.innerHTML = "X: " + acceleration.x;
	valueY.innerHTML = "Y: " + acceleration.y;
	valueZ.innerHTML = "Z: " + acceleration.z;
}

function onError() {
	alert('onError!');
}

