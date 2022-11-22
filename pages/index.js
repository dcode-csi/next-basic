import Seo from '../component/Seo';

export default function Home() {
	return (
		<div>
			{/* 이런식으로  중괄호 없이 바로 prop도 전달가능 */}
			<Seo title='Home' />
			<h1>Hello</h1>
		</div>
	);
}
