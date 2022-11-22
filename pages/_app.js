// 모든 페이지를 아우르는 마스터 템플릿 틀
//공통의 메뉴등의 레이아웃 설정할때 활용

//_app.js에서는 글로벌 css를 불러올수도 있음
import '../styles/globals.css';

import NavBar from '../component/NavBar';

//Component로는 각각의 페이지 내용이 호출됨
function App({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			{/* 각각의 Page들이 이 컴포넌트 위치에 불러와짐 */}
			<Component {...pageProps} />
			<span>hello</span>

			{/* 마스터 템플릿에서 jsx 스타일을 전역으로 지정 - 보통 reset을 전역으로 설정 */}
			<style jsx global>{`
				a {
					color: aqua;
				}
			`}</style>
		</>
	);
}

export default App;
