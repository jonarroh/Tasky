import { getCache, isDataInCache, setCache } from '$lib/images/cache';
import supabase from '../../supabase/client';
import { formatDateToSQLString } from '../../utils/utils';

export async function load() {
	const today: Date | string = new Date();
	const formattedToday: string = formatDateToSQLString(today);

	const cacheKey: string = `tasks_${formattedToday}`;

	if (isDataInCache(cacheKey)) {
		console.log('Fetching data from cache...');
		const cachedData = getCache(cacheKey);
		if (Array.isArray(cachedData)) {
			return {
				count: cachedData.length,
				data: cachedData,
				error: null,
				fromCache: true
			};
		}
	}

	const { data, error } = await supabase
		.from('tasks')
		.select('*')
		.eq('duedate', formattedToday);
	console.log({ data, error });

	if (!error) {
		console.log('Caching data...');
		setCache(cacheKey, data);
	}

	return {
		count: data?.length,
		data,
		error,
		fromCache: false
	};
}
