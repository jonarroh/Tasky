import { json } from '@sveltejs/kit';
import supabase from '../../supabase/client';
import { randomUUID } from 'crypto';
import type { RequestHandler } from './$types';

export async function GET() {
	const query = supabase
		.from('tasks')
		.select('*')
		.eq('duedate', '2023-08-18');
	const tasks = await query;
	console.log(tasks);

	return json(tasks);
}

export const POST: RequestHandler = async ({ request }) => {
	const { Title, Description, Status, CreationDate, DueDate } =
		await request.json();

	const { data, error } = await supabase.from('tasks').insert({
		title: Title,
		description: Description,
		status: Status,
		creationdate: CreationDate,
		duedate: DueDate,
		id: randomUUID()
	});
	if (error) {
		console.log(error);
		return json({ message: 'error' });
	}

	return json({ message: 'success', data });
};
