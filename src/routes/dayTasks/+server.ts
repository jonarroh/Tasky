import { json } from '@sveltejs/kit';
import supabase from '../../supabase/client.js';

export async function POST({ request }) {
	const { id } = await request.json();
	console.log(id);

	const { error } = await supabase
		.from('tasks')
		.delete()
		.match({ id });
	if (error) {
		return json({ ok: false, error });
	}
	return json({ ok: true });
}
