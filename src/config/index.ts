export const ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;

export const mongo = {
	uri: process.env.MONGO_URI || 'NA',
};

export const facebook = {
	clientID: 'INSERT-CLIENT-ID-HERE',
	clientSecret: 'INSERT-CLIENT-SECRET-HERE',
	callbackURL: 'http://localhost:3000/auth/facebook/callback',
	profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
	clientID: process.env.GOOGLE_CLIENT_ID || 'NA',
	clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'NA',
	callbackURL: 'http://localhost:3000/auth/google/callback',
};
