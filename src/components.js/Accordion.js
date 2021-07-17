import React from 'react';

export default function Accordion({ items }) {
	const onTitleClicked = (i) => {
		console.log(`Item ${i} is clicked!`);
	};

	const renderedItems = items.map((item, i) => {
		return (
			<React.Fragment key={item.title}>
				<div className="title active" onClick={() => onTitleClicked(i)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className="content active">
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
}
