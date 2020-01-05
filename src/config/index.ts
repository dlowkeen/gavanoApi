export const ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;

export const mongo = {
	uri: ENV === 'production' ? 'prodmongouri' : 'devmongouri',
};
