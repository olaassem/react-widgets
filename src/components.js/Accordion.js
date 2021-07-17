import React, { useState } from 'react';

export default function Accordion({ items }) {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClicked = (i) => {
		setActiveIndex(i);
	};

	const renderedItems = items.map((item, i) => {
		const active = i === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClicked(i)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renderedItems}
			<p>Clicked index: {activeIndex}</p>
		</div>
	);
}
