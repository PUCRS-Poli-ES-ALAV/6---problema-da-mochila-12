const testCases = [
	{
		string1: "Casablanca",
		string2: "Portentoso",
	},
	{
		string1:
			"Maven, a Yiddish word meaning accumulator of knowledge, began as an attempt to " +
			"simplify the build processes in the Jakarta Turbine project. There were several" +
			" projects, each with their own Ant build files, that were all slightly different." +
			"JARs were checked into CVS. We wanted a standard way to build the projects, a clear " +
			"definition of what the project consisted of, an easy way to publish project information" +
			"and a way to share JARs across several projects. The result is a tool that can now be" +
			"used for building and managing any Java-based project. We hope that we have created " +
			"something that will make the day-to-day work of Java developers easier and generally help " +
			"with the comprehension of any Java-based project.",
		string2:
			"This post is not about deep learning. But it could be might as well. This is the power of " +
			"kernels. They are universally applicable in any machine learning algorithm. Why you might" +
			"ask? I am going to try to answer this question in this article." +
			"Go to the profile of Marin Vlastelica Pogančić" +
			"Marin Vlastelica Pogančić Jun",
	},
];

/**
 *
 * @param {String} s
 * @param {String} t
 * @returns {Number}
 */
const ed = (s, t) => {
	const height = s.length;
	const width = t.length;

	const matrix = Array.from(
		{
			length: height + 1,
		},
		() => {
			return Array.from({
				length: width + 1,
			}).fill(0);
		}
	);

	for (let i = 1; i <= width; i++) {
		matrix[0][i] = matrix[0][i - 1] + 1;
	}

	for (let j = 1; j <= height; j++) {
		matrix[j][0] = matrix[j - 1][0] + 1;
	}

	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= width; j++) {
			const char1 = s[i - 1];
			const char2 = t[j - 1];
			const charsAreEqual = char1 === char2;

			const extraCost = charsAreEqual ? 0 : 1;

			const r1 = matrix[i - 1][j] + 1;
			const r2 = matrix[i][j - 1] + 1;
			const r3 = matrix[i - 1][j - 1] + extraCost;

			matrix[i][j] = Math.min(r1, r2, r3);
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		let row = matrix[i].map((cell) => String(cell).padStart(3, "0")).join("\t");
		console.log(row);
	}

	return matrix[height][width];
};
