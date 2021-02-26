// Please refactor the code below to make it more concise, efficient and readable
// with good logic flow.

/**
 * Find string in first bracket
 *
 * @param String str - String that gonna be checked
 *
 * @returns string inside bracket
 */
const findFirstStringInBracket = (str) => {
	if (!str.length) return '';

	const firstOpenBracketIndex = str.indexOf('(');
	if (firstOpenBracketIndex < 0) return '';

	const firstCloseBracketIndex = str.indexOf(')', firstOpenBracketIndex);
	if (firstCloseBracketIndex < 0) return '';

	return str.substring(firstOpenBracketIndex + 1, firstCloseBracketIndex);
};
