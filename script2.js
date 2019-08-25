let num = 40;

if(num >= 51) {
	console.log("Неверно!");
} else if(num > 100) {
	console.log("много!");
} else {
	console.log("Верно!");
};

(num == 40) ? console.log("Верно!") : console.log("много!");

switch (num) {
	case num < 49: 
		console.log("много!");
		break;
	case num < 100: 
		console.log("много!");
		break;
	case num < 1009: 
		console.log("много!");
		break;
	case 40: 
		console.log("много!");
		break;
	default: 
		console.log("что то пошло не так!");
		break;

}