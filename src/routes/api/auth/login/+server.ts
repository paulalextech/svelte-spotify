import { redirect, type RequestHandler } from '@sveltejs/kit';
import { SPOTIFY_APP_CLIENT_ID, BASE_URL } from '$env/static/private';

const generateRandomString = (length: number) => {
	let randomString = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}
	return randomString;
};

const scope = '';

export const GET: RequestHandler = () => {
	throw redirect(
		307,
		`https://accounts.spotify.com/authorize?${new URLSearchParams({
			response_type: 'code',
			client_id: SPOTIFY_APP_CLIENT_ID,
			scope,
			redirect_uri: `${BASE_URL}/api/auth/callback`,
			state: 
		})}`
	);
};
