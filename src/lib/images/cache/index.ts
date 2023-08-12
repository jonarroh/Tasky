import Cache from 'timed-cache';

const cache = new Cache({ defaultTtl: 60 * 60 * 1000 });

export function getCache(key: string) {
	return cache.get(key);
}

export function setCache(key: string, value: any) {
	cache.put(key, value);
}

export function deleteCache(key: string) {
	cache.remove(key);
}

export const isDataInCache = (key: string) => {
	return cache.get(key) !== undefined;
};

export const clearCache = () => {
	cache.clear();
};
