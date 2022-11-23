import Link from 'next/link';
import { useEffect, useState } from 'react';
import Seo from '../component/Seo';

//getServerSideProps에서 받아진 값을 해당 컴포넌트의 props로 전달받아짐
//해당 props가 전달되는 이유는 _app.js에서 컴포넌트에 ...pageProps를 설정했기에 가능
//server쪽에서 데이터 요청을 해서 모든 api요청 데이터가 받아져야 컴포넌트가 실행됨
//결국 초기에 정적인 데이터를 먼저 보여주고 동적인 데이터가 받아질때까지 로딩바가 보여지면서 순차적으로
//hydration방식이 아닌
//그냥 서버쪽에서 모든 데이터가 넘어올때까지 빈화면을 보여주다가
// 모든 데이터가 넘어와야 한꺼번에 완성된 UI출력하는 SSR방식
export default function Home({ results }) {
	console.log(results);
	return (
		<div className='container'>
			<Seo title='Home' />

			{results.map((movie) => (
				<div key={movie.id} className='movie'>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<h4>
						<Link href={`/movies/${movie.original_title}/${movie.id}`} legacyBehavior>
							<a>{movie.original_title}</a>
						</Link>
					</h4>
				</div>
			))}

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
					cursor: pointer;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}

//이 함수 안쪽의 코드는 무조건 서버에서 실행
export async function getServerSideProps() {
	//const response = await fetch('/api/movies');
	//const { results } = await response.json();

	//fetch함수가 어차피 promise객체를 반환하므로 굳이 response변수에 할당하지 않고
	//해당 값을 괄호로 묶어서 받아진 리턴값을 바로 메서드 체이닝으로 json함수를 바로 연결 가능
	//결국 위의 2줄의 코드와 똑같은 기능
	//해당 기능은 서버쪽에서 실행되므로 절대값 URL을 모두 넣어야 함
	const { results } = await (await fetch('http://localhost:3000/api/movies')).json();

	return {
		//props값은 무조건 객체로 감싸져야 됨
		props: { results },
	};
}
