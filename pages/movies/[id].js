import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Detail() {
	const router = useRouter();

	useEffect(() => {
		console.log(router);
		if (!router.query.title) router.push('/');
	}, []);

	return (
		<div>
			<div className='pic'>
				<img src={`https://image.tmdb.org/t/p/w500${router.query.img}`} />
			</div>
			<h4>{router.query.title}</h4>
			<p>{router.query.content}</p>

			<button onClick={() => router.back()}>go back</button>
		</div>
	);
}
