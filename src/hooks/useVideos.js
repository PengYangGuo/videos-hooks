import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCtZTfYNGRMmoN8k1SV8UXoYXn1nw-NsCU';

const useVideos = (defaultSearchTerm) => {
	const [videos, setvideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const reponse = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 10,
				key: KEY,
			},
		});

		setvideos(reponse.data.items);
	};

	return [videos, search];
};

export default useVideos;
