//need to listen to an event (button press)

window.addEventListener('keydown', function(e){

	console.log("yep");//it enters this function yayy!!
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //detect if there is a corresponding action and select it
	console.log(audio);//yep it detects it!!


});