export default function buildMap(collection, propertyConversions, ...dataMaps) {
	const propKeys = Object.keys(propertyConversions);
	const Items = new Map();
	collection.forEach(item => convertAndAddToMap(propKeys, propertyConversions, Items, item, ...dataMaps));
	return Items;
}

function convertAndAddToMap(propKeys, propertyConversions, itemMap, item, ...dataMaps) {
	propKeys.forEach(key => {
		if (!(key in item)) return;

		const conversion = propertyConversions[key];

		if (typeof conversion !== 'function') {
			item[key] = conversion;
			return;
		}

		item[key] = conversion(item[key], ...dataMaps);

	});

	itemMap.set(item._id, item);
}