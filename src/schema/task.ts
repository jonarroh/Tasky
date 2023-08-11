import z from 'zod';
export interface Task {
	id?: number;
	Title: string;
	Description?: string;
	Status: 'pending' | 'in progress' | 'completed';
	CreationDate: Date;
	DueDate?: Date;
	AssignedUserID?: number;
	TaskImage?: string;
}

export const taskSchema = z.object({
	Title: z.string().min(1).max(100),
	Description: z.string().max(1000).nullable(),
	Status: z.enum(['pending', 'in progress', 'completed']),
	CreationDate: z.date(),
	DueDate: z.date().nullable(),
	AssignedUserID: z.number().int(),
	TaskImage: z.string().max(255).nullable()
});

export function validateTask(task: Task) {
	return taskSchema.parse(task);
}

export function validateTaskPartial(task: Task) {
	return taskSchema.partial().parse(task);
}
