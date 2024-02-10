import readJson from './readJson.mjs';
import buildMap from './buildMap.mjs';

const propertyConversions = {
	_startingPositionX: undefined,
	_startingPositionY: undefined,
	_firstRewardItemType: undefined,
	_firstRewardItemValue: undefined,
	_fixedRewardItemType: undefined,
	_fixedRewardItemValue: undefined,
	_getArtifact: undefined,

	_name: (v, l) => l.get(v) ?? v,
	_rewardItemType: (v, _, i) => v.map(r => {
		const item = i.get(r);
		return item
			? { _id: item._id, _name: item._name, _description: item._description }
			: r;
	}),
};

/**
 * 
 * @param {string} inputPath 
 * @param {<Map<number, object>} language 
 * @param {<Map<number, object>} items 
 * @returns {Promise<Map<number, object>>}
 */
export default async function getStages(inputPath, language, items) {
	const { _data } = await readJson(inputPath);
	return buildMap(_data, propertyConversions, language, items);
}