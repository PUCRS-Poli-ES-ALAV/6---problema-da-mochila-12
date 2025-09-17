const string1 = "Casablanca"
const string2 = "Portentoso"

const ed = (s, t, i, j) => {

	if (i === -1 || j === -1) {
		/**
		 * As duas sao -1
		 */
		if (i === j) {
			return 0;
		} else {
			return Math.max(s.length - i, t.length - j);
		}
	}

	if (s[i] === t[j]) {
		return ed(s, t, i - 1, j - 1);
	} else {
		const r1 = ed(s, t, i - 1, j - 1) + 1;
		const r2 = ed(s, t, i, j - 1) + 1;
		const r3 = ed(s, t, i - 1, j) + 1;

		return Math.min(r1, r2, r3);
	}
};

console.log(ed(string1, string2, string1.length - 1, string2.length - 1));
