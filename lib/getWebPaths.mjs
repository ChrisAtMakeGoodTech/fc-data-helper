import path from 'path';

/**
 * 
 * @param {string} inPath 
 * @param {string} outPath 
 * @returns 
 */
export default function getWebPaths(inPath, outPath) {
	const InPath = path.resolve(inPath);
	const OutPath = path.resolve(outPath);
	const MonoPath = path.join(InPath, 'MonoBehaviour');
	const WebPaths = {
		InPath,
		OutPath,
		MonoBehaviors: MonoPath,
		Language: path.join(MonoPath, 'DesignLanguage.json'),
		Items: path.join(MonoPath, 'DesignItem.json'),
		ItemDetailTypes: path.join(MonoPath, 'DesignItemDetailType.json'),
		Stages: path.join(MonoPath, 'DesignStage.json'),
	};

	Object.freeze(WebPaths);

	return WebPaths;
}