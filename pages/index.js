import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../component/Seo';

export default function Home({ results }) {
	const router = useRouter();

	//파일명을 [...이름].js로 변경하면 url로 넘기는 여러 정보값을 router에서 배열로 받음
	const handleClick = (id, title) => {
		router.push(`/movies/${title}/${id}`);
	};

	return (
		<div className='container'>
			<Seo title='Home' />

			{results?.map((movie) => (
				<div
					className='movie'
					key={movie.id}
					onClick={() => handleClick(movie.id, movie.original_title)}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

					<h4>
						{/* 파일명을 [...이름].js로 변경하면 url로 넘기는 여러 정보값을 router에서 배열로 받음 */}
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

export async function getServerSideProps() {
	const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
	return {
		props: { results },
	};
}
