export const googleUserFormatter = (profile: any) => {
	const image = profile.photos[0].value.slice(0, profile.photos[0].value.indexOf('?sz=50'));
	const googleUser = {
		identifier: 'googleId',
		profileUrlId: 'googleProfileURL',
		userModel: {
			googleId: profile.id,
			displayName: profile.displayName,
			lastName: profile.name.familyName,
			firstName: profile.name.givenName,
			email: profile.emails[0].value,
			iconPhotoURL: `${image}?sz=50`,
			bigPhotoURL: `${image}?sz=250`,
			googleProfileURL: profile._json.url,
		},
	};

	return googleUser;
};
