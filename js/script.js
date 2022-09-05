let numbers = [];

try {
	for (let i = 0; i < 2; i++) {
		let number = Number(prompt("Digite um número"));

		if (isNaN(number)) {
			throw "É necessário que o valor digitado seja um número.";
		} else {
			numbers[i] = number;
		}
	}
} catch (error) {
	alert(error);
}

function doMathOperators(numberOne, numberTwo) {
	const sum = numberOne + numberTwo;
	const sub = numberOne - numberTwo;
	const mult = numberOne * numberTwo;
	const div = numberOne / numberTwo;
	const rest = numberOne % numberTwo;

	alert(`A soma dos dois números é: ${sum}`);
	alert(`A subtração dos dois números é: ${sub}`);
	alert(`A multiplicação dos dois números é: ${mult}`);
	alert(`A divisão de ${numberOne} por ${numberTwo} é: ${div}`);
	alert(`O resto da divisão é: ${rest}`);

	const sumIsEven = sum % 2 == 0 ? "par" : "ímpar";
	const isEqual = numberOne == numberTwo ? "iguais" : "diferentes";

	alert(`A soma dos dois números é ${sumIsEven}.`);
	alert(`Os números inseridos são ${isEqual}.`);
}

doMathOperators(numbers[0], numbers[1]);
