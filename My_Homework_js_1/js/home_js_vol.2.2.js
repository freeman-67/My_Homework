var mainArr = [];
var i;
//задаем наполнение массива именами
for (i = 0; i < 5; i++) {
	mainArr[i] = prompt('Введите имя'+ (i + 1),'');
	console.log(mainArr[i]);
} 
console.log(mainArr);

// задаем уловие проверки сопадения именами
// с именами в массиве
var yourName = prompt('Введите имя для проверки','');
var passwordUser = 'qwerty';

for (i = 0; i < 5; i++) {
	if (yourName == mainArr[i] && yourName !== null) {
		alert('Добро пожаловать '+ yourName);
		var pass = prompt('введите Ваш пароль','');
		
		if (pass == passwordUser) {
		alert('Вы прошли индентификацию!');
		break;
		} else { alert('пароль неверный');
				break;
				}
	} else if (yourName !== mainArr[0] && 
		yourName !== mainArr [1] && 
		yourName !== mainArr [2] && 
		yourName !== mainArr [3] && 
		yourName !== mainArr[4] ) {
		alert('вашего имени нет в списке');
		break;
	} 
	}
 


	