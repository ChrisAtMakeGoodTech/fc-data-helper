import { promises as fs } from 'fs';

export default async function readJson(inputPath) {
	const DataRaw = await fs.readFile(inputPath, 'utf-8');
	return JSON.parse(DataRaw);
}