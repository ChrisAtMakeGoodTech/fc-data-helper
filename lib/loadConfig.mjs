import { promises as fs } from 'fs';
import path from 'path';

/** 
 * @typedef {Object} Configuration
 * @property {string} inPath
 * @property {string} outPath
 */

/**
 * 
 * @param {string} configFilePath 
 * @returns {Promise<Configuration>}
 */
export default async function loadConfig(configFilePath) {
	const resolvedPath = path.resolve(configFilePath);
	console.debug(`Resolved configFilePath: ${resolvedPath}`);
	const rawFile = await fs.readFile(resolvedPath, 'utf-8');
	return JSON.parse(rawFile);
}