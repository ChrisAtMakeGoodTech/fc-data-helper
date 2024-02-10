import readJson from './readJson.mjs';
import buildMap from './buildMap.mjs';

const propertyConversions = {
	_name: (v, l) => l.get(v) ?? v,
};

/**
 * 
 * @param {string} inputPath 
 * @param {Map<number, object>} language 
 * @returns {Promise<Map<number, object>>}
 */
export default async function getItemDetailTypes(inputPath, language) {
	const { _data } = await readJson(inputPath);
	return buildMap(_data, propertyConversions, language);
}