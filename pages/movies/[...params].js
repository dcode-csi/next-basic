import { useRouter } from 'next/router';

export default function Detail() {
	const router = useRouter();
	//상세페이지를 새로고침하면 라우터에서 넘어온 정보가 없으므로 undefined로 에러
	//그래도 해당 값이 없으면 빈 배열로 초기화
	const [title, id] = router.query.params || [];

	return (
		<div>
			<h4>{title || 'Loading...'}</h4>
		</div>
	);
}
