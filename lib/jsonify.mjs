export default function jsonify(object) {
	return JSON.stringify(prepareObject(object), null, '\t');
}

function prepareObject(object) {
	if (object instanceof Map) {
		const result = {};
		object.forEach((v, k) => result[k] = v);
		return result;
	}
	
	return object;
}