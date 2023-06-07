import { dev } from '$app/environment';

export function add(a: number, b: number) {
	if (dev) {
		console.log(`Adding ${a} and ${b}`);
	}
	return a + b;
}
