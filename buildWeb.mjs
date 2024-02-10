import { promises as fs } from 'fs';
import path from 'path';

import getWebPaths from './lib/getWebPaths.mjs';
import getLanguage from './lib/getLanguage.mjs';
import getItems from './lib/getItems.mjs';
import getItemDetailTypes from './lib/getItemDetailTypes.mjs';
import getStages from './lib/getStages.mjs';
import jsonify from './lib/jsonify.mjs';
import loadConfig from './lib/loadConfig.mjs';

(async function () {
	const WebPaths = await loadWebPaths('./config/config.json');
	const Language = await getLanguage(WebPaths.Language);
	const ItemDetailTypes = await getItemDetailTypes(WebPaths.ItemDetailTypes, Language);
	const Items = await getItems(WebPaths.Items, Language, ItemDetailTypes);
	const Stages = await getStages(WebPaths.Stages, Language, Items);

	await Promise.all([
		fs.writeFile(path.join(WebPaths.OutPath, 'language.json'), jsonify(Language)),
		fs.writeFile(path.join(WebPaths.OutPath, 'items.json'), jsonify(Items)),
		fs.writeFile(path.join(WebPaths.OutPath, 'item-detail-types.json'), jsonify(ItemDetailTypes)),
		fs.writeFile(path.join(WebPaths.OutPath, 'stages.json'), jsonify(Stages)),
	]);
}());

/**
 * 
 * @param {string} configFilePath 
 * @returns 
 */
async function loadWebPaths(configFilePath) {
	const { inPath, outPath } = await loadConfig(configFilePath);
	return getWebPaths(inPath, outPath);
}