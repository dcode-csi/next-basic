import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../component/Seo';

export default function Home({ results }) {
	const router = useRouter();

	//useRouter를 이용하여 쿼리스트링으로 객체정보도 전달 가능
	//브라우저에서 url뒤에 title=potato정보값이 같이 넘어가는것을 확인
	const handleClick = (id) => {
		router.push({
			pathname: `/movies/${id}`,
			query: {
				title: 'potato',
			},
		});
	};

	return (
		<div className='container'>
			<Seo title='Home' />

			{results?.map((movie) => (
				<div className='movie' key={movie.id} onClick={() => handleClick(movie.id)}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

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
