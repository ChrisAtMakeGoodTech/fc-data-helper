import readJson from './readJson.mjs';
import buildMap from './buildMap.mjs';

const propertyConversions = {
	_roundSprite: undefined,
	_ticket: undefined,
	_mark: undefined,
	_linkShopId: undefined,
	_stageLink: undefined,
	_gradeMerge: undefined,
	_textColor: undefined,
	_bgGradientTop: undefined,
	_bgGradientBottom: undefined,
	_sprite: undefined,
	_background: undefined,

	_name: (v, l) => l.get(v) ?? v,
	_detailType: (v, _, dt) => dt.get(v) ?? v,
	_description: (v, l) => l.get(v) ?? v,
};

/**
 * 
 * @param {string} inputPath 
 * @param {Map<number, object>} language 
 * @param {Map<number, object>} itemDetailTypes  
 * @returns {Promise<Map<number, object>>}
 */
export default async function getItems(inputPath, language, itemDetailTypes) {
	const { _data } = await readJson(inputPath);

	return buildMap(_data, propertyConversions, language, itemDetailTypes)
}