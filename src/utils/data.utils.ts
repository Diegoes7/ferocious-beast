export const getData = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	return await response.json();
};

// return a promise, T means generic, we dont know what we getting back
// get some type T, and return same type T
