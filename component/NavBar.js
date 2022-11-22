import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
	const router = useRouter();
	//각 라우터의 정보값 확인 가능 (pathname)
	console.log(router);

	return (
		<nav>
			<Link href='/' style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>
				Home
			</Link>
			<Link href='/about' style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
				About
			</Link>
		</nav>
	);
}

export default NavBar;
