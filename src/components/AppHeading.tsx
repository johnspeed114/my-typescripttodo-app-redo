import React, { FormEvent, useState } from 'react';

interface addHeadingProp {
	addTodo(prop: string): void;
}

export const AppHeading: React.FunctionComponent<addHeadingProp> = ({ addTodo }) => {
	const [ newTodo, setNewTodo ] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		console.log('worked');
		setNewTodo('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(event) => setNewTodo(event.target.value)} value={newTodo} />
			</form>
		</div>
	);
};
