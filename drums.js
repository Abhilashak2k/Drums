//need to listen to an event (button press)

window.addEventListener('keydown', function(e){

	console.log("yep");//it enters this function yayy!!
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //detect if there is a corresponding action and select it
	const animate = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select using class key

	console.log(audio);//yep it detects it!!
	if(audio==null) {console.log("oops!"); return;}
	audio.currentTime = 0; //even if i press 1 while play() is running, it should reset and start over
	audio.play();

	//animation part

	animate.classList.add('playing'); //earlier playing was not included in the key div earier...
});


//removing animation part

window.addEventListener('keyup', function (e){
	const animate = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select using class key
	animate.classList.remove('playing');
});