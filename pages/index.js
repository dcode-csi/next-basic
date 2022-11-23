import Link from 'next/link';
import Seo from '../component/Seo';

export default function Home({ results }) {
	return (
		<div className='container'>
			<Seo title='Home' />

			{results?.map((movie) => (
				//만약 Link컴포넌트로 div같은 블록요소를 감싸면 hydration에러 발생
				//Link는 a태그로 렌더링되므로 a요소 안에는 블록요소가 올수없기 때문
				<div className='movie' key={movie.id}>
					<Link key={movie.id} href={`/movies/${movie.id}`}>
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					</Link>
					<h4>
						<Link href={`/movies/${movie.id}`} legacyBehavior>
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

export async function getServerSideProps() {
	const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
	return {
		props: { results },
	};
}
