import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: { type: String, default: '' },
	linkedInId: { type: String, default: '' },
	displayName: { type: String, default: '' },
	lastName: { type: String, default: '' },
	firstName: { type: String, default: '' },
	email: { type: String, required: true },
	company: { type: String, default: '' },
	position: { type: String, default: '' },
	iconPhotoURL: { type: String, default: '' },
	bigPhotoURL: { type: String, default: '' },
	companyPhotoURL: { type: String, default: '' },
	credits: { type: Number, default: 0 },
	events: [
		{
			type: Schema.Types.ObjectId,
			ref: 'event',
			default: [],
		},
	],
	linkedInProfileURL: { type: String, default: '' },
	googleProfileURL: { type: String, default: '' },
});

export const User = mongoose.model('user', userSchema);
