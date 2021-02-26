// Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan
// sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
// Dibawah ini ada array berisi sederetan Strings.
// ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
// Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok
// Anagramnya,
// Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter

/**
 * Group string by its anagrams
 *
 * @param Array strs - Array of strings
 *
 * @returns array of grouped by anagram strings
 */
const groupByAnagrams = (strings) => {
	const results = {};
	for (let word of strings) {
		const cleansed = word.split('').sort().join('');
		results[cleansed] ? results[cleansed].push(word) : results[cleansed] = [word];
	}
	return Object.values(results);
};
