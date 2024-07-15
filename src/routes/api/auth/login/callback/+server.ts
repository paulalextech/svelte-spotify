import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url, cookies }) => {
	const code = url.searchParams.get('code') || null;
	const state = url.searchParams.get('state') || null;

	const storedState = cookies.get('spotify_auth_state') || null;
};
