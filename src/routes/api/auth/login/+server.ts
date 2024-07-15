import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	throw redirect(307, `https://accounts.spotify.com/authorize?`);
};
