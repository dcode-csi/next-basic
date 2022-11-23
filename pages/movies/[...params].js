import Seo from '../../component/Seo';

export default function Detail({ data }) {
	const [title, id] = data || [];

	return (
		<div>
			<Seo title={title} />
			<h4>{title}</h4>
		</div>
	);
}

export function getServerSideProps(props) {
	const data = props.params.params;
	return {
		props: { data },
	};
}
