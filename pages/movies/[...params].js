//getServerSideProps로 서버쪽에서 전달한 데이터를 이용해 제목 출력
//기존 코드와의 차이점은 클라이언트에서 동작하는 router가 아닌 서버쪽에서 바로 데이터를 가져오므로
//상세페이지에서 새로고침해도 서버사이드 랜더링으로 데이터값을 가져와서 SEO에 좋음
export default function Detail({ data }) {
	console.log(data);
	const [title, id] = data || [];

	return (
		<div>
			<h4>{title}</h4>
		</div>
	);
}

export function getServerSideProps(props) {
	//파라미터로 자동적으로 해당 props 넘겨받음
	//서버에서 실행되므로 서버터미널에서만 콘솔값 확인가능
	//console.log(props);
	console.log(props.params.params);
	const data = props.params.params;
	return {
		props: { data },
	};
}
