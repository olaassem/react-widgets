export default function Accordion({ items }) {
	const accordionList = items.map((item, i) => {
		return (
			<div key={i}>
				<h1>{item.title}</h1>
				<p>{item.content}</p>
			</div>
		);
	});
	return <div>{accordionList}</div>;
}
