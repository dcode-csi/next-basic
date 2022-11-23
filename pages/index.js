import { useEffect, useState } from 'react';
import Seo from '../component/Seo';

const API_KEY = '4cf85a609f260b43cf0278ad12483b46';

export default function Home() {
	const [Movies, setMovies] = useState();

	const fetchMovies = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
		const json = await response.json();
		setMovies(json.results);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div>
			<Seo title='Home' />
			{!Movies && <h4>Loading...</h4>}
			{Movies?.map((movie) => (
				<div key={movie.id}>
					<h4>{movie.original_title}</h4>
				</div>
			))}
		</div>
	);
}
