import React, { useState, useEffect } from 'react';

export default function Search() {
	const [term, setTerm] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Label</label>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
