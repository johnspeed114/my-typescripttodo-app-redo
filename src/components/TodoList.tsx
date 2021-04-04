import React from 'react';
import Todo from '../types/Todo';

interface TodoListProp {
	todos: Array<Todo>;
	toggleOnOff(prop: string): void;
}
//Would any work here?
export const TodoList: React.FunctionComponent<TodoListProp> = ({ todos, toggleOnOff }) => {
	const handleComplete = (id: string) => {
		toggleOnOff(id);
	};
	return (
		<ul>
			{todos.map((item) => (
				<li key={item.toString()}>
					<input type="checkbox" onChange={() => handleComplete(item.id)} />
					{item.text} Completed: {item.complete.toString()}
				</li>
			))}
		</ul>
	);
};
//reconcillation/keys/virtuals dom/ should component update camel case
