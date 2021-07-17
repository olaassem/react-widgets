// import Accordion from './components.js/Accordion';
// import Search from './components.js/Search';

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
	{ label: 'Red', color: 'red' },
	{ label: 'Green', color: 'green' },
	{ label: 'Blue', color: 'blue' },
];

export default function App() {
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			<Dropdown options={options} />
		</div>
	);
}
