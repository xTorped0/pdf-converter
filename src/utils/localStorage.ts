const storage = window.localStorage;

export function setLocal(key: string, value: any) {
	storage.setItem(key, JSON.stringify(value));
}

type combineData = { [key: string]: any } | any[];

export function combineLocal(key: string, data: combineData) {
	const storageData = storage.getItem(key);
	const isDataArray = Array.isArray(data);
	const parsedData = storageData
		? JSON.parse(storageData)
		: isDataArray
			? []
			: {};
	let mixedData: combineData;

	if (typeof parsedData !== 'object') return;

	if (Array.isArray(parsedData)) {
		if (isDataArray) mixedData = parsedData.concat(data);
		else mixedData = [...parsedData, data];
	} else if (!isDataArray) {
		mixedData = Object.assign(parsedData, data);
	} else {
		console.warn('Data can`t be combined');
		return;
	}
	storage.setItem(key, JSON.stringify(mixedData));
}

export function getLocal(key: string) {
	const data = storage.getItem(key);
	return data ? JSON.parse(data) : undefined;
}
