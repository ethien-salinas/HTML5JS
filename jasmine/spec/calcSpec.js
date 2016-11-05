var calc = require('../calc.js');

describe('prueba de sumas', function() {
	it('suma de dos enteros positivos', function(){
		var resultado = calc.sum(4,5);
		expect(resultado).toEqual(9);
	});
	it('suma de dos enteros negativos', function(){
		var resultado = calc.sum(-4,-5);
		expect(resultado).toEqual(-9);
	});
	it('suma de dos enteros igual a cadena', function(){
		var resultado = calc.sum(4,5);
		expect(resultado).not.toBe('9');
	});
});

//expect(foo).toEqual(1);
