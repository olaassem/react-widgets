// import Accordion from './components.js/Accordion';
// import Search from './components.js/Search';
// import Dropdown from './components.js/Dropdown';

import { useState } from 'react';
import Translate from './components.js/Translate';

// const items = [
// 	{
// 		title: 'What is React?',
// 		content: 'React is a front end javascript framework',
// 	},
// 	{
// 		title: 'Why use React?',
// 		content: 'React is a favorite JS library among engineers',
// 	},
// 	{
// 		title: 'How do you use React?',
// 		content: 'You use React by creating components',
// 	},
// ];

const options = [
	{ label: 'A Blush of Red', color: 'red' },
	{ label: 'A Glimmer of Green', color: 'green' },
	{ label: 'A Wave of Blue', color: 'blue' },
];

export default function App() {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{/* <button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle DropDown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null} */}

			<Translate />
		</div>
	);
}
