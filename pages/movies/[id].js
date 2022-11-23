import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Detail() {
	const router = useRouter();
	//console.log(router);

	useEffect(() => {
		if (!router.query.title) router.push('/');
	}, []);

	return (
		<div>
			<h4>{router.query.title}</h4>
		</div>
	);
}
