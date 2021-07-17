// import Accordion from './components.js/Accordion';
// import Search from './components.js/Search';

import { useState } from 'react';
import Dropdown from './components.js/Dropdown';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{ label: 'A Hint of Red', color: 'red' },
	{ label: 'A Glimmer of Green', color: 'green' },
	{ label: 'A Shade of Blue', color: 'blue' },
];

export default function App() {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
		</div>
	);
}
