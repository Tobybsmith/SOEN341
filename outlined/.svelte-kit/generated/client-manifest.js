export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/login": [3],
	"/main": [4],
	"/main/[jobid]": [5],
	"/profile": [6],
	"/profile/[userid]": [7],
	"/prototyping": [8],
	"/register": [9]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};