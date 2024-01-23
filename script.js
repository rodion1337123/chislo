let numberinput = document.querySelector(".numberfield"); 
let btn = document.querySelector(".btn");
let count = 0;

let random = Math.random()*100 +1;
	let guess = Math.round(random);
	console.log(guess);

btn.onclick = function(){
	let number = numberinput.value;
	console.log(number);
	count++;
	document.querySelector(".count").innerHTML = count;
	if(guess==number){
		document.querySelector(".result").innerHTML = "Поздравляю! Вы угадали число!";
		document.querySelector(".tip").innerHTML = "";
	}
	else if(guess>number){
		document.querySelector(".tip").innerHTML = "Маловато"
		document.querySelector(".result").innerHTML = "Пока не угадали";
	}
	else if(guess<number){
		document.querySelector(".tip").innerHTML = "Многовато"
		document.querySelector(".result").innerHTML = "Пока не угадали";
	}
	numberinput.value = "";
}


