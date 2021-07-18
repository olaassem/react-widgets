import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function Translate() {
	const options = [
		{ label: 'Afrikaans', value: 'af' },
		{ label: 'Arabic', value: 'ar' },
		{ label: 'Hindi', value: 'hi' },
	];

	const [language, setLanguage] = useState(options[0]);

	return (
		<div>
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
		</div>
	);
}
