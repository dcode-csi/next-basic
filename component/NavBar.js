import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
	const router = useRouter();

	return (
		<nav>
			{/* NextJS 13버전업되면서 Link안에 a를 넣을수 없게 바뀌었으나 그러면 style jsx가 안 먹음 : legacyBehavior적용 */}
			<Link href='/' legacyBehavior>
				<a className={router.pathname === '/' ? 'active' : ''}>Home</a>
			</Link>
			<Link href='/about' legacyBehavior>
				<a className={router.pathname === '/about' ? 'active' : ''}>About</a>
			</Link>
			<style jsx>{`
				nav {
					background-color: tomato;
				}
				a {
					text-decoration: none;
				}
				.active {
					color: yellow;
				}
			`}</style>
		</nav>
	);
}

export default NavBar;
