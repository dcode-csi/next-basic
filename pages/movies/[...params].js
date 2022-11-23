import { useRouter } from 'next/router';

export default function Detail() {
	const router = useRouter();
	//url params로 넘어온 정보값이 배열로 받아지는 것을 확인
	console.log(router);

	return (
		<div>
			<h4>{router.query.title || 'Loading...'}</h4>
		</div>
	);
}
