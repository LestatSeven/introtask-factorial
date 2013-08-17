function fac_iter(n) {
	var x = 1;
	for (var i = 1; i <= n; i++) {
		x *= i;
	}
	return x;
}

var c = [1, 1];
function factorial(n) {
	if (!c[n]) {
		c[n] = fac_iter(n);
	}
	return c[n];
}

function getSummFact(n) {
	n += '';
	var sum = 0,
		len = n.length;
	for (var i = 0; i < len; i++) {
		sum += factorial(n[i]);
	}
	return sum;
}
