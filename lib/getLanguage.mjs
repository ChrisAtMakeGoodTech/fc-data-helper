import readJson from './readJson.mjs';

export default async function getLanguage(inputPath) {
	const { _data } = await readJson(inputPath);
	const Language = new Map();
	_data.forEach(d => {
		Language.set(d._id, { english: d._value_english, korean: d._value_korean, id: d._id, });
	});
	return Language;
}